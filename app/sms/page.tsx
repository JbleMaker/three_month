"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import { useFormState } from "react-dom";
import { smsLogin } from "./action";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className=" py-8 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">SMS Login</h1>
          <h2 className="text-xl">Verify your Phone Number.</h2>
        </div>

        <form action={dispatch} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Phone Number"
            required
            name="phone"
            defaultValue="+82"
            errors={state.error?.formErrors}
          />
          {state?.token ? (
            <Input
              type="number"
              placeholder="인증번호"
              errors={state.error?.formErrors}
              required
              name="token"
              min={100000}
              max={999999}
            />
          ) : null}
          <Button text={state.token ? "인증번호 확인" : "인증번호 보내기"} />
        </form>
      </div>
    </div>
  );
}
