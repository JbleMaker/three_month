import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
export default function SMSLogin() {
  return (
    <div className=" py-8 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">SMS Login</h1>
          <h2 className="text-xl">Verify your Phone Number.</h2>
        </div>

        <form className="flex flex-col gap-3">
          <FormInput
            type="number"
            placeholder="Phone Number"
            errors={[]}
            required
            name="Phone Number"
          />
          <FormInput
            type="number"
            placeholder="인증번호"
            errors={[]}
            required
            name="인증번호"
          />
          <FormButton loading={false} text="인증번호 확인" />
        </form>
      </div>
    </div>
  );
}
