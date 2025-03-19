import { TextareaHTMLAttributes } from "react";

interface TextareaProps {
  id: string;
  name: string;
  labelText?: string;
  errors?: string[];
}

export default function FormTextArea({
  id,
  name,
  labelText,
  errors,
  ...rest
}: TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="w-full flex flex-col sm:gap-3 gap-1">
      {labelText && (
        <label htmlFor={id} className="sm:text-base text-sm font-semibold m-1">
          {labelText}
        </label>
      )}
      <textarea
        name={name}
        className="w-full h-24 bg-transparent border-0 border-b-1 border-neutral-400 transition-all px-1
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0 focus:px-3 
        placeholder:text-neutral-800 dark:placeholder:text-neutral-400 placeholder:text-sm 
        aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500 resize-none"
        aria-invalid={Boolean(errors)}
        id={id}
        {...rest}
      />
      {/* error messages */}
      {errors?.map((error, i) => (
        <p key={error + i} className="text-sm text-red-500 ml-1 break-words">
          {error}
        </p>
      ))}
    </div>
  );
}
