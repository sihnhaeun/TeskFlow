import { Dispatch, SetStateAction } from "react";

type InputFieldProps = {
  change: Dispatch<SetStateAction<string>>;
  label: string;
  type: string;
  id: string;
};

function InputField({ label, type, id, change }: InputFieldProps) {
  return (
    <div className="flex flex-col items-center gap-y-2 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => change(e.target.value)}
        className="border rounded-lg w-full px-5 py-4"
        type={type}
        id={id}
      />
    </div>
  );
}
export default InputField;
