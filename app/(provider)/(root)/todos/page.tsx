"use client";

import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import DefaultButton from "../(auth)/_components/DefaultButton";
import DeleteButton from "../(auth)/_components/DeleteButton";
import IsCompletedButton from "../(auth)/_components/IsCompletedButton";
import Page from "../_components/Page/page";

function TodoPage() {
  const currentUserId = useAuthStore((state) => state.currentUserId);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [todos, setTodos] = useState<Tables<"todos">[]>([]);

  useEffect(() => {
    (async () => {
      const { data: todos, error } = await supabase
        .from("todos")
        .select("*")
        .order("isCompleted");

      if (error) return console.log("todos error", error);

      setTodos(todos);
    })();
  }, [todos]);

  return (
    <Page
      title={isLoggedIn ? "My To-Do-List" : "To-Do-List"}
      subtitle={
        isLoggedIn
          ? "Add, edit, or complete tasks as you go"
          : "Login required to create your To-Do list"
      }
    >
      <div className="w-full flex flex-col gap-x-10">
        <div className="flex gap-x-6">
          <div className="border-[3px] border-[#3498DB] bg-[rgba(52,152,219,0.1)] rounded-lg px-5 py-3 w-full">
            <h5 className="font-bold mb-3">Work</h5>
            <div className="w-full h-[450px] overflow-y-auto px-2">
              <ul className="h-[150px] w-full flex flex-col gap-4">
                {todos
                  .filter((todo) => todo.category === "Work")
                  .map((todo) =>
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
                              (todo.priority === "Medium" &&
                                "border-[#F39C12]") ||
                              (todo.priority === "High" &&
                                "border-[#E74C3C]") ||
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

                        <p className="text-sm">{todo.dueDate}</p>

                        <div className="flex mt-4">
                          <IsCompletedButton
                            setTodos={setTodos}
                            todos={[todo]}
                          />
                          <span className="ml-auto">
                            <DeleteButton todoId={todo.id}>Delete</DeleteButton>
                          </span>
                        </div>
                      </li>
                    ) : null
                  )}
              </ul>
            </div>
          </div>

          <div className="border-[3px] border-[#E67E22] bg-[rgba(231,76,60,0.1)] rounded-lg px-5 py-3 w-full">
            <h5 className="font-bold mb-3">Personal</h5>
            <div className="w-full h-[450px] overflow-y-auto px-2">
              <ul className="h-[150px]  w-[350px] flex flex-col gap-4 ">
                {todos
                  .filter((todo) => todo.category === "Personal")
                  .map((todo) =>
                    currentUserId === todo.authorId ? (
                      <li
                        key={todo.id}
                        className={`${`row-start-${
                          (todo.category === "Work" && 1) ||
                          (todo.category === "Personal" && 2) ||
                          (todo.category === "Study" && 3) ||
                          ""
                        }`}
                ${
                  todo.isCompleted
                    ? "opacity-50 line-through"
                    : (todo.priority === "Low" && "border-[#27AE60]") ||
                      (todo.priority === "Medium" && "border-[#F39C12]") ||
                      (todo.priority === "High" && "border-[#E74C3C]") ||
                      ""
                }
                bg-white w-full border-[2px] rounded-lg px-5 py-3`}
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

                        <p className="text-sm">{todo.dueDate}</p>

                        <div className="flex mt-4">
                          <IsCompletedButton
                            setTodos={setTodos}
                            todos={[todo]}
                          />

                          <span className="ml-auto">
                            <DeleteButton todoId={todo.id}>Delete</DeleteButton>
                          </span>
                        </div>
                      </li>
                    ) : null
                  )}
              </ul>
            </div>
          </div>

          <div className="border-[3px] border-[#9B59B6] bg-[rgba(155,89,182,0.1)] rounded-lg px-5 py-3 w-full">
            <h5 className="font-bold mb-3">Study</h5>
            <div className="w-full h-[450px] overflow-y-auto px-2">
              <ul className="h-[150px] w-full flex flex-col gap-4 ">
                {todos
                  .filter((todo) => todo.category === "Study")
                  .map((todo) =>
                    currentUserId === todo.authorId ? (
                      <li
                        key={todo.id}
                        className={`${`row-start-${
                          (todo.category === "Work" && 1) ||
                          (todo.category === "Personal" && 2) ||
                          (todo.category === "Study" && 3) ||
                          ""
                        }`}
                ${
                  todo.isCompleted
                    ? "opacity-50 line-through"
                    : (todo.priority === "Low" && "border-[#27AE60]") ||
                      (todo.priority === "Medium" && "border-[#F39C12]") ||
                      (todo.priority === "High" && "border-[#E74C3C]") ||
                      ""
                }
                bg-white w-full border-[2px] rounded-lg px-5 py-3`}
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

                        <p className="text-sm">{todo.dueDate}</p>

                        <div className="flex mt-4">
                          <IsCompletedButton
                            setTodos={setTodos}
                            todos={[todo]}
                          />

                          <span className="ml-auto">
                            <DeleteButton todoId={todo.id}>Delete</DeleteButton>
                          </span>
                        </div>
                      </li>
                    ) : null
                  )}
              </ul>
            </div>
          </div>
        </div>

        {isLoggedIn ? (
          <Link className="w-full" href={"/todos/add"}>
            <DefaultButton>Add To-Do</DefaultButton>
          </Link>
        ) : (
          <div className="flex gap-x-5 w-[600px] mx-auto mt-3">
            <Link className="w-full" href={"/sign-up"}>
              <DefaultButton>Sign Up</DefaultButton>
            </Link>

            <Link className="w-full" href={"/log-in"}>
              <DefaultButton>Log In</DefaultButton>
            </Link>
          </div>
        )}
      </div>
    </Page>
  );
}

export default TodoPage;
