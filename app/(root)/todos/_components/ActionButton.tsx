import { Dispatch, SetStateAction } from "react";

type ActionButtonProps = {
  priorityAndCategory: string;
  buttonLabel: string;
  setPriorityAndCategory: Dispatch<SetStateAction<string>>;
};

function ActionButton({
  priorityAndCategory,
  buttonLabel,
  setPriorityAndCategory,
}: ActionButtonProps) {
  const handleClick = () => {
    setPriorityAndCategory(buttonLabel);
  };

  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className={`w-full mt-4 border rounded-lg px-5 py-4 bg-white hover:border-black active:brightness-95
        ${priorityAndCategory === buttonLabel ? "border-black" : "border"}
        transition`}
    >
      {buttonLabel}
    </button>
  );
}

export default ActionButton;
