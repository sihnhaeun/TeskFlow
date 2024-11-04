import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";
import { Dispatch, SetStateAction } from "react";
import { FiCheck, FiX } from "react-icons/fi";

type IsCompletedButton = {
  setTodos: Dispatch<SetStateAction<Tables<"todos">[]>>;
  todos: Tables<"todos">[];
};

function IsCompletedButton({ setTodos, todos }: IsCompletedButton) {
  // GPT..>.<
  const handleToggleButton = async (todoId: number) => {
    const todoToToggle = todos.find((todo) => todo.id === todoId);
    if (!todoToToggle) return;

    const newIsCompleted = !todoToToggle.isCompleted;

    await supabase
      .from("todos")
      .update({ isCompleted: newIsCompleted })
      .eq("id", todoId);

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: newIsCompleted } : todo
      )
    );
  };
  return (
    <>
      {todos.map((todo) => (
        <button
          key={todo.id}
          onClick={() => handleToggleButton(todo.id)}
          className="flex items-center justify-center border rounded-lg px-4 py-2 bg-[#27AE60] text-white hover:bg-[#219653] transition"
        >
          {todo.isCompleted ? (
            <>
              <FiCheck />
              <p className="ml-1">Done</p>
            </>
          ) : (
            <>
              <FiX />
              <p className="ml-1">Mark as Done</p>
            </>
          )}
        </button>
      ))}
    </>
  );
}

export default IsCompletedButton;
