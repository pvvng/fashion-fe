interface SelectOptionProps {
  id: string;
  name: string;
  labelText: string;
  options: string[];
  required?: boolean;
  requiredText?: string;
}

export default function SelectOption({
  id,
  name,
  labelText,
  options,
  required = false,
  requiredText,
}: SelectOptionProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {labelText}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="w-full p-0 px-2 py-1 border-none ring ring-black text-sm dark:text-black"
        required={required}
      >
        <option value="" disabled>
          [필수] {requiredText}
        </option>
        {options.map((op, i) => (
          <option key={op + i} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
