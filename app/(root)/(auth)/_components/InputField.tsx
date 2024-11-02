import { Dispatch, SetStateAction } from "react";

type InputFieldProps = {
  change: Dispatch<SetStateAction<string>>;
  label: string;
  type: string;
  id: string;
};

function InputField({ label, type, id, change }: InputFieldProps) {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => change(e.target.value)}
        className="border rounded-lg w-[300px] h-10 px-3 py-2"
        type={type}
        id={id}
      />
    </div>
  );
}

export default InputField;
