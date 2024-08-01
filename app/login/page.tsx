"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

export default function Login() {
  const [state, action] = useFormState(handleForm, null);
  //action을 인자로 받아서 그 action의 트리거를 돌려줌
  //첫번째는 반환하는 값, 두번째는 action을 실행하는 trigger
  //우리의 UI가 action이 return한 새로운 state로 업데이트 되길 원하기 때문에 "use client"를 사용
  //인라인으로 작성한 Server Action은 사용할 수 없음, 따로 파일을 만듬

  return (
    <div className=" py-8 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">Introduce Your Team!</h1>
          <h2 className="text-xl">Log in with Email and password.</h2>
        </div>

        <form action={action} className="flex flex-col gap-3">
          <FormInput type="email" placeholder="Email" required name="email" />
          <FormInput
            type="password"
            placeholder="Password"
            required
            name="password"
          />

          <FormButton text="Log in" />
        </form>
      </div>
      <SocialLogin />
    </div>
  );
}
