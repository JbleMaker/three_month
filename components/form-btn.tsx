import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn py-2.5 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:cursor-not-allowed">
      {loading ? (
        <div className="animate-spin">
          <FontAwesomeIcon icon={faSpinner} className="w-full h-6" />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
