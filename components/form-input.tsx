interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}
export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-boxcolor-700 focus:ring-btncolor-600 border-none pl-3 placeholder:text-boxcolor-700"
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
      />
      {errors?.map((error, index) => (
        <span key={index} className="text-red-400 font-medium ">
          {errors}
        </span>
      ))}
    </div>
  );
}
