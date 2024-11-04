"use client";

import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Page from "../../../_components/Page/page";
import TodoForm from "../../_components/TodoForm";
// import TodoForm from "../../_components/TodoForm";

function EditPage() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState<Tables<"todos">>();

  useEffect(() => {
    (async () => {
      const { data: todo, error } = await supabase
        .from("todos")
        .select("*")
        .eq("id", Number(todoId))
        .single();

      if (error) return console.log("edit page error", error);

      setTodo(todo);
    })();
  }, []);

  return (
    <Page
      title="Edit Your To-Do Item"
      subtitle="Make sure to save your changes!"
    >
      <div className="w-full">
        <TodoForm todo={todo} todoId={todoId} label="Edit To-Do"></TodoForm>
      </div>
    </Page>
  );
}

export default EditPage;
