"use client";

import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { ComponentProps, useEffect, useState } from "react";
import DefaultButton from "../../(auth)/_components/DefaultButton";
import InputField from "../../(auth)/_components/InputField";
import ActionButton from "../_components/ActionButton";

type TodoFormProps = {
  label: string;
  todo: Tables<"todos"> | undefined | null;
  todoId: string | string[] | undefined | null;
};

function TodoForm({ label, todo, todoId }: TodoFormProps) {
  const router = useRouter();

  const today = dayjs().format("YYYY-MM-DD");

  // Add Todo
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDay] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  // To-Do-List 추가하기
  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !dueDate ||
      !dueTime ||
      !priority ||
      !category
    )
      return alert("Please fill in all fields to create a To-Do item");

    if (!todoId) {
      // 추가
      const { error: addError } = await supabase.from("todos").insert({
        title,
        description,
        dueDate,
        dueTime,
        priority,
        category,
        isCompleted: false,
        createdAt: today,
      });

      if (addError) {
        alert("Todo item added failed!");
        return console.log("todo add error", addError);
      } else {
        alert("Todo item added successfully!");
        router.push("/todos");
      }
    } else {
      // 수정
      const { error: updateError } = await supabase
        .from("todos")
        .update({
          title,
          description,
          category,
          dueDay: dueDate,
          dueTime,
          isCompleted: todo?.isCompleted,
          priority,
        })
        .eq("id", todoId)
        .single();
      if (updateError) {
        alert("Todo item added failed!");
        return console.log("todo add error", updateError);
      } else {
        alert("Todo item updated successfully!");
        router.push("/todos");
      }
    }
  };

  useEffect(() => {
    if (todo) {
      setDueDay(todo?.dueDate);
      setDueTime(todo?.dueTime);
    }
  }, [todo]);

  useEffect(() => {
    if (todo) {
      setCategory(todo.category);
      setPriority(todo.priority);
    }
  }, [todo]);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col gap-y-3 m-auto border rounded-lg px-6 py-7 h-full w-[480px]"
    >
      {/* 제목, 설명 */}
      <div className="flex gap-x-4">
        <InputField
          value={title}
          label={"Task Title"}
          type={"text"}
          id={"Title"}
          change={setTitle}
        />

        <InputField
          value={description}
          label={"Task Description"}
          type={"text"}
          id={"Description"}
          change={setDescription}
        />
      </div>

      {/* 순위도 */}
      <div className="flex flex-col items-center gap-x-4">
        <h5>Priority</h5>
        <div className="flex gap-x-4 w-full">
          <ActionButton
            setPriorityAndCategory={setPriority}
            priorityAndCategory={priority}
            buttonLabel="Low"
            bg="bg-[#27AE60]"
            hover="hover:bg-[#219653]"
          />
          <ActionButton
            setPriorityAndCategory={setPriority}
            priorityAndCategory={priority}
            buttonLabel="Medium"
            bg="bg-[#F39C12]"
            hover="hover:bg-[#E67E22]"
          />
          <ActionButton
            setPriorityAndCategory={setPriority}
            priorityAndCategory={priority}
            buttonLabel="High"
            bg="bg-[#E74C3C]"
            hover="hover:bg-[#C0392B]"
          />
        </div>
      </div>
      {/* 카테고리*/}
      <div className="flex flex-col items-center gap-x-4">
        <h5>Category</h5>
        <div className="flex gap-x-4 w-full">
          <ActionButton
            setPriorityAndCategory={setCategory}
            priorityAndCategory={category}
            buttonLabel="Work"
            bg="bg-[#3498DB]"
            hover="hover:bg-[#2980B9]"
          />
          <ActionButton
            setPriorityAndCategory={setCategory}
            priorityAndCategory={category}
            buttonLabel="Personal"
            bg="bg-[#E67E22]"
            hover="hover:bg-[#D35400]"
          />
          <ActionButton
            setPriorityAndCategory={setCategory}
            priorityAndCategory={category}
            buttonLabel="Study"
            bg="bg-[#9B59B6]"
            hover="hover:bg-[#8E44AD]"
          />
        </div>
      </div>

      {/* 날짜 */}
      <div className="flex flex-col items-center gap-y-2 w-full">
        <label htmlFor={"Due Date"}>Due Date</label>
        <div className="flex gap-x-4 w-full">
          <input
            value={dueDate}
            onChange={(e) => setDueDay(e.target.value)}
            className="border rounded-lg w-full px-5 py-4"
            type="date"
            id={"Due Date"}
            max={"9999-12-31"}
            min={"0001-01-01"}
          />
          <input
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            className="border rounded-lg w-full px-5 py-4"
            type="time"
            id={"Due Date"}
          />
        </div>
      </div>

      <DefaultButton>{label}</DefaultButton>
    </form>
  );
}

export default TodoForm;
