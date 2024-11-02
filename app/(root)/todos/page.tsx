"use client";

import { supabase } from "@/supabase/client";
import { ComponentProps, useEffect, useState } from "react";
import Button from "../(auth)/_components/Button";
import InputField from "../(auth)/_components/InputField";
import Page from "../_components/Page/page";
import ActionButton from "./_components/ActionButton";

function TodoPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    // To-Do-List 추가하기
    await supabase.from("todos").insert({
      title,
      description,
      dueDate,
      priority,
      category,
      isCompleted: false,
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
    setCategory("");

    return fetch();
  };
  const fetch = async () => await supabase.from("todos").select("*");
  fetch();

  useEffect(() => {
    (async () => {
      fetch();
    })();
  }, [title, description, dueDate, priority, category]);

  return (
    <Page title="My To-Do List" subtitle="Hello, [User's Name]">
      {/* 추가하기 */}
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-y-8 w-[420px]"
      >
        <h5></h5>
        {/* 제목, 설명 */}
        <div className="flex gap-x-4">
          <InputField
            label={"Task Title"}
            type={"text"}
            id={"Title"}
            change={setTitle}
          />

          <InputField
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
            />
            <ActionButton
              setPriorityAndCategory={setPriority}
              priorityAndCategory={priority}
              buttonLabel="Medium"
            />
            <ActionButton
              setPriorityAndCategory={setPriority}
              priorityAndCategory={priority}
              buttonLabel="High"
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
            />
            <ActionButton
              setPriorityAndCategory={setCategory}
              priorityAndCategory={category}
              buttonLabel="Personal"
            />
            <ActionButton
              setPriorityAndCategory={setCategory}
              priorityAndCategory={category}
              buttonLabel="Study"
            />
          </div>
        </div>

        {/* 날짜 */}
        <div className="flex flex-col items-center gap-y-2 w-full">
          <label htmlFor={"Due Date"}>Due Date</label>
          <input
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded-lg w-full px-5 py-4"
            type="date"
            id={"Due Date"}
            max={"9999-12-31"}
            min={"0001-01-01"}
          />
        </div>

        <Button>Add Task</Button>
      </form>

      {/* 리스트 */}
      <div></div>
    </Page>
  );
}

export default TodoPage;
