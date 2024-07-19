import {
  faApple,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500 my-3" />

      <div className="flex flex-col items-center justify-center">
        <span className="font-medium text-xl">Sign up SNS</span>
        <div className="flex gap-5  p-3 justify-center">
          <div className="sns-create">
            <Link href="/kakaotalk">
              <FontAwesomeIcon icon={faComment} className="w-7 h-7" />
            </Link>
          </div>
          <div className="sns-create">
            <Link href="/apple">
              <FontAwesomeIcon icon={faApple} className="w-7 h-7" />
            </Link>
          </div>
          <div className="sns-create">
            <Link href="/google">
              <FontAwesomeIcon icon={faGoogle} className="w-7 h-7" />
            </Link>
          </div>
          <div className="sns-create">
            <Link href="/github">
              <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
            </Link>
          </div>
          <div className="sns-create">
            <Link href="/sms">
              <FontAwesomeIcon icon={faCommentDots} className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
