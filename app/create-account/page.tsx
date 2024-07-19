import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className=" py-8 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">Introduce Your Team!</h1>
          <h2 className="text-xl">Fill in the form below to Join!</h2>
        </div>

        <form className="flex flex-col gap-3">
          <FormInput type="text" placeholder="Username" errors={[]} required />
          <FormInput type="email" placeholder="Email" errors={[]} required />
          <FormInput
            type="password"
            placeholder="Password"
            errors={[]}
            required
          />
          <FormInput
            type="password"
            placeholder="Password Confirm"
            errors={[]}
            required
          />
          <FormButton loading={false} text="Create Account" />
        </form>
      </div>
      <SocialLogin />
    </div>
  );
}
