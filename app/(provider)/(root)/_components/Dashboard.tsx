"use client";

import { useAuthStore } from "@/zustand/auth.store";
import TodoCard from "../todos/_components/TodoCard";
import Page from "./Page/page";

function Dashboard() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

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
                      bgColor="[rgba(52,152,219,0.1)]"
                      borderColor="[#3498DB]"
                      category="Work"
                      value="today"
                    ></TodoCard>

                    <TodoCard
                      title="Personal"
                      bgColor="[rgba(231,76,60,0.1)]"
                      borderColor="[#E67E22]"
                      category="Personal"
                      value="today"
                    ></TodoCard>

                    <TodoCard
                      title="Study"
                      bgColor="[rgba(155,89,182,0.1)]"
                      borderColor="[#9B59B6]"
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
                    bgColor="[rgba(52,152,219,0.1)]"
                    borderColor="[#3498DB]"
                    category="Work"
                    value="dueDate"
                  ></TodoCard>

                  <TodoCard
                    title="Personal"
                    bgColor="[rgba(231,76,60,0.1)]"
                    borderColor="[#E67E22]"
                    category="Personal"
                    value="dueDate"
                  ></TodoCard>

                  <TodoCard
                    title="Study"
                    bgColor="[rgba(155,89,182,0.1)]"
                    borderColor="[#9B59B6]"
                    category="Study"
                    value="dueDate"
                  ></TodoCard>
                </div>
              </section>
              <section className="flex flex-col bg-gray-100 w-[450px] h-full rounded-lg p-5">
                <label htmlFor="memo" className="font-bold mb-3">
                  Memo
                </label>
                <textarea
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
