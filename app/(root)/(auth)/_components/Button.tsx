import { ReactNode } from "react";

type InputFieldProps = {
  children: ReactNode;
};

function Button({ children }: InputFieldProps) {
  return (
    <button
      type="submit"
      className="w-full mt-4 border rounded-lg px-5 py-4 bg-white hover:border-black active:brightness-95"
    >
      {children}
    </button>
  );
}

export default Button;
