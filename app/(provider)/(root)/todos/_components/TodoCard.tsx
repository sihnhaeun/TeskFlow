"use client";

import api from "@/api/api";
import { Tables } from "@/supabase/database.types";
import { useAuthStore } from "@/zustand/auth.store";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "../../(auth)/_components/DeleteButton";
import IsCompletedButton from "../../(auth)/_components/IsCompletedButton";

type TodoCardProps = {
  title: string;
  borderColor: string;
  bgColor: string;
  category: string;
  value: string;
};

function TodoCard({
  title,
  borderColor,
  bgColor,
  category,
  value,
}: TodoCardProps) {
  const currentUserId = useAuthStore((state) => state.currentUserId);
  const [todos, setTodos] = useState<Tables<"todos">[]>([]);
  const [today, setToday] = useState<Tables<"todos">[]>([]);
  const [dueDate, setDueDate] = useState<Tables<"todos">[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Tables<"todos">[]>([]);

  const fetchTodos = async () => {
    const { data: todos, error: todosError } = await api.todosApi.getTodos();
    if (todosError) return console.log("todos error", todosError);
    setTodos(todos);

    // 오늘 날짜
    const day = dayjs().format("YYYY-MM-DD");

    // 오늘의 투두
    const { data: todayData, error: todayError } = await api.todosApi.eqTodos({
      column: "createdAt",
      value: day,
    });

    if (todayError) {
      return console.log("Today Error", todayError);
    }
    setToday(todayData);

    // 마감일 투두
    const { data: dueDateData, error: dueDateError } =
      await api.todosApi.eqTodos({ column: "dueDate", value: day });

    if (dueDateError) {
      return console.log("Due Date Error:", dueDateError);
    }
    setDueDate(dueDateData);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // GPT... ><
  useEffect(() => {
    let dataFilter: Tables<"todos">[] = [];

    if (value === "todos") {
      dataFilter = todos;
    } else if (value === "today") {
      dataFilter = today;
    } else if (value === "dueDate") {
      dataFilter = dueDate;
    }

    // 카테고리
    const categoryFilter = dataFilter?.filter(
      (todo) => todo.category === category
    );

    // 상태 업데이트
    setFilteredTodos(categoryFilter);
  }, [value, todos, today, dueDate, category]);
  return (
    <div
      className={`border-[3px] ${borderColor} ${bgColor} rounded-lg px-2 py-3 w-full`}
    >
      <h5 className="font-bold mb-3">{title}</h5>
      <div className="w-[350px] max-h-[400px] overflow-y-auto px-2">
        <ul className="min-h-[150px] w-full flex flex-col gap-4">
          {filteredTodos.map((todo) =>
            currentUserId === todo.authorId ? (
              <li
                key={todo.id}
                className={`${`row-start-${
                  (todo.category === "Work" && 1) ||
                  (todo.category === "Personal" && 2) ||
                  (todo.category === "Study" && 3) ||
                  ""
                }`} ${
                  todo.isCompleted
                    ? "opacity-50 line-through"
                    : (todo.priority === "Low" && "border-[#27AE60]") ||
                      (todo.priority === "Medium" && "border-[#F39C12]") ||
                      (todo.priority === "High" && "border-[#E74C3C]") ||
                      ""
                } bg-white w-full border-[2px] rounded-lg px-5 py-3`}
              >
                <div className="flex items-center">
                  <h5 className="flex flex-col font-bold text-2xl">
                    {todo.title}
                    <p className="text-sm">{todo.description}</p>
                  </h5>
                  <span className="ml-auto text-xl">
                    <Link href={`/todos/${todo.id}/edit`}>
                      <FiEdit className="ease-linear transform hover:scale-110 transition" />
                    </Link>
                  </span>
                </div>

                <hr className="my-4" />

                <p className="text-sm">
                  DueDate: {todo.dueDate} {todo.dueTime}
                </p>

                <div className="flex mt-4">
                  <IsCompletedButton
                    fetchTodos={fetchTodos}
                    setTodos={setTodos}
                    todos={[todo]}
                  />
                  <span className="ml-auto">
                    <DeleteButton fetchTodos={fetchTodos} todoId={todo.id}>
                      Delete
                    </DeleteButton>
                  </span>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoCard;
