import { supabase } from "@/supabase/client";

type getTodosProps = {
  filter: string;
  column: string;
  value: any;
};

async function getTodos({ filter, column, value }: getTodosProps) {
  let data = supabase.from("todos").select("*");
  if (filter === "eq") {
    data = data.eq(column, value);
  } else if (filter === "order") {
    data = data.order(column);
  }

  const { data: todos, error } = await data;

  return todos;
}

async function getTodo(todoId: number) {
  const todos = await supabase
    .from("todos")
    .select("*")
    .eq("id", todoId)
    .single();

  return todos;
}

type insertTodoProps = {
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  priority: string;
  category: string;
  isCompleted: boolean;
  createdAt: string;
};

async function insertTodo({
  title,
  description,
  dueDate,
  dueTime,
  priority,
  category,
  isCompleted,
  createdAt,
}: insertTodoProps) {
  const todos = await supabase.from("todos").insert({
    title: title,
    description: description,
    dueDate: dueDate,
    dueTime: dueTime,
    priority: priority,
    category: category,
    isCompleted: isCompleted,
    createdAt: createdAt,
  });

  return todos;
}

type updateTodoProps = {
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  priority: string;
  category: string;
  isCompleted: boolean | undefined;
  todoId: string | string[];
};
async function updateTodo({
  title,
  description,
  dueDate,
  dueTime,
  priority,
  category,
  isCompleted,
  todoId,
}: updateTodoProps) {
  const todos = await supabase
    .from("todos")
    .update({
      title: title,
      description: description,
      dueDate: dueDate,
      dueTime: dueTime,
      priority: priority,
      category: category,
      isCompleted: isCompleted,
    })
    .eq("id", todoId)
    .single();

  return todos;
}

export default {
  getTodos,
  getTodo,
  insertTodo,
  updateTodo,
};
