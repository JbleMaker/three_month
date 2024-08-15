"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { createAccount } from "./action";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className=" py-8 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">Introduce Your Team!</h1>
          <h2 className="text-xl">Fill in the form below to Join!</h2>
        </div>

        <form action={dispatch} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="닉네임"
            required
            name="username"
            errors={state?.fieldErrors.username}
          />
          <Input
            type="email"
            placeholder="Email"
            required
            name="email"
            errors={state?.fieldErrors.email}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            required
            name="password"
            minLength={PASSWORD_MIN_LENGTH}
            errors={state?.fieldErrors.password}
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            required
            name="password_confirm"
            minLength={PASSWORD_MIN_LENGTH}
            errors={state?.fieldErrors.password_confirm}
          />
          <Button text="Create Account" />
        </form>
      </div>
      <SocialLogin />
    </div>
  );
}
