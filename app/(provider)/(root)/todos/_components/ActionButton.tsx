import { Dispatch, SetStateAction } from "react";

type ActionButtonProps = {
  priorityAndCategory: string;
  buttonLabel: string;
  bg: string;
  hover: string;
  setPriorityAndCategory: Dispatch<SetStateAction<string>>;
};

function ActionButton({
  priorityAndCategory,
  buttonLabel,
  bg,
  hover,
  setPriorityAndCategory,
}: ActionButtonProps) {
  const handleClick = () => {
    setPriorityAndCategory(buttonLabel);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`w-full mt-4 border rounded-lg px-5 py-4
        ${
          priorityAndCategory === buttonLabel
            ? `${bg} ${hover} text-white`
            : "bg-gray-300 hover:bg-gray-400"
        } 
        transition`}
    >
      {buttonLabel}
    </button>
  );
}

export default ActionButton;
