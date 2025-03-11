"use client";

import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { InputHTMLAttributes, useState } from "react";

interface InputProps {
  name: string;
  type: string;
  labelText?: string;
  errors?: string[];
}

export default function FormInput({
  name,
  type: originalType,
  labelText,
  errors,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  const [value, setValue] = useState("");
  const [type, setType] = useState(originalType);

  const togglePasswordType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {labelText && (
        <label htmlFor={name} className="font-semibold ml-1">
          {labelText}
        </label>
      )}
      <div className="relative">
        <input
          name={name}
          className="w-full h-10 bg-transparent rounded-md border-none 
        ring-1 ring-neutral-200 transition-all shadow-md
        focus:outline-none focus:ring-2 focus:ring-blue-500
        placeholder:text-gray-400"
          id={name}
          type={type}
          {...rest}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* password visible */}
        {originalType === "password" && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"
            onClick={togglePasswordType}
          >
            {type === "password" ? (
              <EyeIcon className="size-6" />
            ) : (
              <EyeSlashIcon className="size-6 text-gray-600" />
            )}
          </span>
        )}
      </div>
      {/* errors */}
      <div className="flex flex-col gap-0.5">
        {errors?.map((error, i) => (
          <p key={error + i} className="text-red-500 ml-1">
            {error}
          </p>
        ))}
      </div>
    </div>
  );
}
