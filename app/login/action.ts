"use server";
//서버에서만 실행되어야 하는 action이라고 알려줄 것

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["잘못된 비밀번호 입니다."],
  };
}
