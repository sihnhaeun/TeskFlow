import { ReactNode } from "react";

type DefaultButtonProps = {
  children: ReactNode;
  variantStyle?: "primary" | "signUp" | "secondary";
};

function DefaultButton({ children, variantStyle }: DefaultButtonProps) {
  return (
    <button
      type="submit"
      className={`w-full mt-4 border rounded-lg px-5 py-4
        text-white transition
        bg-[#27AE60] hover:bg-[#219653]
        
        ${
          (variantStyle === "primary" && "bg-[#27AE60] hover:bg-[#219653]") || // login
          (variantStyle === "signUp" && "bg-[#3498DB] , hover:bg-[#2980B9]") || // signUp
          (variantStyle === "secondary" && "bg-[#E67E22] hover:bg-[#D35400]") // add ,edit
        }
        
        `}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
