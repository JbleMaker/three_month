import Image from "next/image";
import logoB from "../logo/logotypeB_white.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen ">
      <div className="my-auto flex flex-col items-center gap-5 *:font-semibold ">
        <Image src={logoB} alt="logo" className="w-50" />
        <h1 className="text-center text-xl ">THREEMONTH</h1>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
        <div className="flex gap-3">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
