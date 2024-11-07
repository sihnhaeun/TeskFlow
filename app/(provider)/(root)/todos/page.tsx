"use client";

import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import DefaultButton from "../(auth)/_components/DefaultButton";
import Page from "../_components/Page/page";
import TodoCard from "./_components/TodoCard";

function TodoPage() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

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
          <TodoCard
            title="Work"
            bgColor="bg-[rgba(52,152,219,0.1)]"
            borderColor="border-[#3498DB]"
            category="Work"
            value="todos"
          ></TodoCard>

          <TodoCard
            title="Personal"
            bgColor="bg-[rgba(231,76,60,0.1)]"
            borderColor="border-[#E67E22]"
            category="Personal"
            value="todos"
          ></TodoCard>

          <TodoCard
            title="Study"
            bgColor="bg-[rgba(155,89,182,0.1)]"
            borderColor="border-[#9B59B6]"
            category="Study"
            value="todos"
          ></TodoCard>
        </div>

        {isLoggedIn ? (
          <Link className="w-full mt-6" href={"/todos/add"}>
            <DefaultButton variantStyle="secondary">Add To-Do</DefaultButton>
          </Link>
        ) : (
          <div className="flex gap-x-5 w-[600px] mx-auto mt-6">
            <Link className="w-full" href={"/sign-up"}>
              <DefaultButton variantStyle="signUp">Sign Up</DefaultButton>
            </Link>

            <Link className="w-full" href={"/log-in"}>
              <DefaultButton variantStyle="primary">Log In</DefaultButton>
            </Link>
          </div>
        )}
      </div>
    </Page>
  );
}

export default TodoPage;
