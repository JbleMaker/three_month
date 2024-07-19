import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function Login() {
  return (
    <div className=" py-8 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">Introduce Your Team!</h1>
          <h2 className="text-xl">Log in with Email and password.</h2>
        </div>

        <form className="flex flex-col gap-3">
          <FormInput type="email" placeholder="Email" errors={[]} required />
          <FormInput
            type="password"
            placeholder="Password"
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
