"use client";

import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { InputHTMLAttributes, useState } from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  regex?: RegExp;
  labelText?: string;
  errors?: string[];
}

export default function FormInput({
  id,
  name,
  type: originalType,
  regex,
  labelText,
  errors,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  const [type, setType] = useState(originalType);

  const togglePasswordType = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="w-full flex flex-col sm:gap-3 gap-1">
      {labelText && (
        <label htmlFor={id} className="font-semibold m-1">
          {labelText}
        </label>
      )}
      <div className="relative">
        <input
          name={name}
          className="w-full h-10 bg-transparent border-0 border-b-1 border-neutral-400 transition-all px-1
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0 focus:px-3 
          placeholder:text-neutral-800 placeholder:text-sm 
          aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500"
          aria-invalid={Boolean(errors)}
          id={id}
          type={type}
          {...rest}
        />
        {/* password visible */}
        {originalType === "password" && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer
            text-neutral-700 hover:text-neutral-400 transition-colors"
            onClick={togglePasswordType}
          >
            {type === "password" ? (
              <EyeIcon className="size-6" />
            ) : (
              <EyeSlashIcon className="size-6" />
            )}
          </span>
        )}
      </div>
      {/* error messages */}
      {errors?.map((error, i) => (
        <p key={error + i} className="text-sm text-red-500 ml-1 break-words">
          {error}
        </p>
      ))}
    </div>
  );
}
