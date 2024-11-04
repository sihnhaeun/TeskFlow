import { ReactNode } from "react";

type DefaultButtonProps = {
  children: ReactNode;
};

function DefaultButton({ children }: DefaultButtonProps) {
  return (
    <button
      type="submit"
      className="w-full mt-4 border rounded-lg px-5 py-4 bg-[#27AE60] text-white hover:bg-[#219653] transition"
    >
      {children}
    </button>
  );
}

export default DefaultButton;
