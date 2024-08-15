"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => {
  return !username.includes("admin");
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
      .refine(checkUsername, "사용할 수 없는 이름 입니다."),

    email: z.string().email().toLowerCase(),
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
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirm: formData.get("password_confirm"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
