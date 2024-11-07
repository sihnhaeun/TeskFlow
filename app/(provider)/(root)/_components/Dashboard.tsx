"use client";

import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useState } from "react";
import TodoCard from "../todos/_components/TodoCard";
import Page from "./Page/page";

function Dashboard() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const currentUserId = useAuthStore((state) => state.currentUserId);
  const [memo, setMemo] = useState("");

  const handleClickUpdateMemo = async () => {
    if (currentUserId) {
      const { error } = await supabase
        .from("dashboard")
        .update({ memo })
        .eq("userId", currentUserId);
      if (error) {
        console.error("Error inserting memo", error);
      }
    }
  };

  const handleClickInsertMemo = async () => {
    if (currentUserId) {
      const { data: userMemoRecords } = await supabase
        .from("dashboard")
        .select("userId")
        .eq("userId", currentUserId);
      if (!userMemoRecords) return console.log("aa");
      const hasWrittenMemo = userMemoRecords?.length === 1;

      if (!hasWrittenMemo) {
        const { error } = await supabase.from("dashboard").insert({ memo });

        if (error) {
          console.error("Error inserting memo:", error);
        }
      }
    }
  };

  return (
    <>
      {isLoggedIn && (
        <Page
          title="Manage Your Day"
          subtitle="Keep track of your tasks and stay on top of your goals"
        >
          <div className="flex gap-x-7 justify-center">
            <main>
              <article className="w-[850px] h-full">
                <section className="flex flex-col bg-gray-100 rounded-lg px-5 py-4">
                  <h5 className="font-bold mb-3">Today Todo</h5>
                  <div className="flex gap-x-5 w-full pb-3 overflow-x-auto">
                    <TodoCard
                      title="Work"
                      bgColor="bg-[rgba(52,152,219,0.1)]"
                      borderColor="border-[#3498DB]"
                      category="Work"
                      value="today"
                    ></TodoCard>

                    <TodoCard
                      title="Personal"
                      bgColor="bg-[rgba(231,76,60,0.1)]"
                      borderColor="border-[#E67E22]"
                      category="Personal"
                      value="today"
                    ></TodoCard>

                    <TodoCard
                      title="Study"
                      bgColor="bg-[rgba(155,89,182,0.1)]"
                      borderColor="border-[#9B59B6]"
                      category="Study"
                      value="today"
                    ></TodoCard>
                  </div>
                </section>
              </article>
            </main>
            <aside className="flex flex-col gap-y-7">
              <section className="flex flex-col bg-gray-100 w-[450px] h-[327px] rounded-lg px-5 py-4">
                <h5 className="font-bold mb-3">Due Date</h5>
                <div className="flex flex-col gap-y-5 w-full pr-3 overflow-x-auto">
                  <TodoCard
                    title="Work"
                    bgColor="bg-[rgba(52,152,219,0.1)]"
                    borderColor="border-[#3498DB]"
                    category="Work"
                    value="dueDate"
                  ></TodoCard>

                  <TodoCard
                    title="Personal"
                    bgColor="bg-[rgba(231,76,60,0.1)]"
                    borderColor="border-[#E67E22]"
                    category="Personal"
                    value="dueDate"
                  ></TodoCard>

                  <TodoCard
                    title="Study"
                    bgColor="bg-[rgba(155,89,182,0.1)]"
                    borderColor="border-[#9B59B6]"
                    category="Study"
                    value="dueDate"
                  ></TodoCard>
                </div>
              </section>
              <section className="flex flex-col bg-gray-100 w-[450px] h-full rounded-lg p-5">
                <div className="flex font-bold mb-3 items-center">
                  <label htmlFor="memo">Memo</label>
                  <button
                    className="ml-auto px-4 py-2 bg-[#3498DB] text-white hover:bg-[#2980B9] font-semibold rounded-lg transition"
                    onClick={handleClickUpdateMemo}
                  >
                    Save
                  </button>
                </div>
                <textarea
                  onClick={handleClickInsertMemo}
                  onChange={(e) => setMemo(e.target.value)}
                  name="memo"
                  id="memo"
                  className="bg-gray-50 border rounded-lg w-full h-full resize-none"
                ></textarea>
              </section>
            </aside>
          </div>
        </Page>
      )}
    </>
  );
}

export default Dashboard;
