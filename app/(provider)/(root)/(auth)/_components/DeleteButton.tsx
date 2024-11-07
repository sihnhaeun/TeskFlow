import { supabase } from "@/supabase/client";
import { ReactNode } from "react";

type DeleteButtonProps = {
  fetchTodos: () => Promise<void>;
  children: ReactNode;
  todoId: number;
};

function DeleteButton({ fetchTodos, children, todoId }: DeleteButtonProps) {
  const handleClickDeleteButton = async () => {
    await supabase.from("todos").delete().eq("id", todoId);
    fetchTodos();
    return alert("Todo item deleted successfully!");
  };

  return (
    <button
      type="button"
      onClick={handleClickDeleteButton}
      className="border rounded-lg px-4 py-2 bg-[#E74C3C] text-white hover:bg-[#C0392B] transition"
    >
      {children}
    </button>
  );
}

export default DeleteButton;
