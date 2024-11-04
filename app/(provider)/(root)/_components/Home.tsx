"use client";

import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import DefaultButton from "../(auth)/_components/DefaultButton";
import Page from "./Page/page";

function Home() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <Page
          title="Welcome to TaskFlow"
          subtitle="Effortlessly Manage Your To-Do List"
        >
          <div className="grid grid-cols-2 grid-rows-1 gap-y-10 gap-x-10 text-center w-[900px] mx-auto">
            {/* 로그인을 하지 않은 상태에서 무엇을 보여줄까.. 고민 중 */}

            <div className="col-start-1 row-start-1">
              <h4 className="text-lg font-bold">Discover TaskFlow</h4>
              <hr className="my-3" />
              <p>
                Save time and achieve your goals with efficient task management.
              </p>
              <p>TaskFlow makes it easy to organize all your to-dos.</p>
            </div>

            <div className="col-start-2 row-start-1">
              <h4 className="text-lg font-bold">Key Features</h4>
              <hr className="my-3" />
              <p>Intuitive Dashboard for quick insights.</p>
              <p>Seamless Schedule Management to keep you on track.</p>
              <p>Organized To-Do Lists for better productivity.</p>
            </div>

            <div className="col-span-2 row-start-5">
              <h4 className="text-lg font-bold">Join Us Today!</h4>
              <hr className="my-3" />
              <p>
                Sign up to unlock all the features and manage your tasks
                effectively.
              </p>
              <p>Already have an account? Log in to access your tasks!</p>

              <div className="flex gap-x-5 w-[600px] mx-auto mt-3">
                <Link className="w-full" href={"/sign-up"}>
                  <DefaultButton>Sign Up</DefaultButton>
                </Link>

                <Link className="w-full" href={"/log-in"}>
                  <DefaultButton>Log In</DefaultButton>
                </Link>
              </div>
            </div>
          </div>
        </Page>
      )}
    </>
  );
}

export default Home;
