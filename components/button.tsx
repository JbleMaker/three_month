"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  //자신의 부모 components를 보고, 가장 가까운 form을 찾음
  //form이 작성된 components에서는 사용할 수 없음
  //form의 자식 요소 안에서 사용해야됨
  // "use client" 최상단 작성
  // console.log(pending);
  return (
    <button
      disabled={pending}
      className="primary-btn py-2.5 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:cursor-not-allowed">
      {pending ? (
        <div className="animate-spin flex justify-center items-center">
          <FontAwesomeIcon icon={faSpinner} className="w-full h-6" />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
