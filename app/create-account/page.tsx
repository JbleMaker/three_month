"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { createAccount } from "./action";
import { useFormState } from "react-dom";

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
          <FormInput
            type="text"
            placeholder="Username"
            required
            name="username"
          />
          <FormInput type="email" placeholder="Email" required name="email" />
          <FormInput
            type="password"
            placeholder="Password"
            required
            name="password"
          />
          <FormInput
            type="password"
            placeholder="Password Confirm"
            required
            name="passwordconfirm"
          />
          <FormButton text="Create Account" />
        </form>
      </div>
      <SocialLogin />
    </div>
  );
}
