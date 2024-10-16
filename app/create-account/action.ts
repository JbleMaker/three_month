"use server";
import bcrypt from "bcrypt";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import { z } from "zod";
import db from "@/lib/db";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const checkUsername = (username: string) => {
  return !username.includes("admin");
};

const checkUniqueUsername = async (username: string) => {
  //닉네임 db 중복검사
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  //이메일 db 중복검사
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkPassword = ({
  password,
  password_confirm,
}: {
  password: string;
  password_confirm: string;
}) => {
  return password === password_confirm;
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자만 입력 가능합니다.",
        required_error: "닉네임을 작성해주세요.",
      })
      .min(5, "닉네임이 너무 짧습니다.")
      .max(10, "닉네임이 너무 깁니다.")
      .trim()
      .toLowerCase()
      .refine(checkUsername, "사용할 수 없는 이름 입니다.")
      .refine(checkUniqueUsername, "이미 사용중인 닉네임입니다."),

    email: z
      .string()
      .email()
      .toLowerCase()
      .refine(checkUniqueEmail, "이미 사용중인 이메일입니다."),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, "비밀번호는 8자리 이상이여야 합니다.")
      .regex(
        PASSWORD_REGEX,
        "대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
      ),
    password_confirm: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPassword, {
    message: "비밀번호가 같지 않습니다.",
    path: ["password_confirm"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  console.log(cookies());
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirm: formData.get("password_confirm"),
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    //비밀번호 hash
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    //사용자 db 저장
    //사용자 로그인
    const session = await getIronSession(cookies(), {
      cookieName: "login-authentication",
      password: process.env.COOKIE_PASSWORD!,
    });
    //@ts-ignore
    session.id = user.id;
    await session.save();
    redirect("/profile");
  }
}
