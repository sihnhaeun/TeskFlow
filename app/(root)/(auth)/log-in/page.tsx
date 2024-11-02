"use client";

import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import Page from "../../_components/Page/page";
import InputField from "../_components/InputField";

function LogInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!email || !password) return alert("빈칸이 있습니다");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("log-in error", error);
      return alert("로그인에 실패했습니다");
    }

    router.push("/");
    alert("로그인에 성공했습니다");
  };

  return (
    <Page>
      <h2 className="text-2xl text-center font-bold">로그인</h2>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmitForm}>
        <InputField
          change={setEmail}
          label={"Email"}
          type={"email"}
          id={"email"}
        />

        <InputField
          change={setPassword}
          label={"Password"}
          type={"password"}
          id={"password"}
        />

        <button
          className="border rounded-lg h-10 bg-white hover:border-black active:brightness-95"
          type="submit"
        >
          로그인
        </button>
      </form>
    </Page>
  );
}

export default LogInPage;
