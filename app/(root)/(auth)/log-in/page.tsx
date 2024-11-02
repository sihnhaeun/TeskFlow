"use client";

import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import Page from "../../_components/Page/page";
import Button from "../_components/Button";
import InputField from "../_components/InputField";

function LogInPage() {
  const router = useRouter();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

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

    setIsLoggedIn(true);
    router.push("/");
    alert("로그인에 성공했습니다");
  };

  return (
    <Page
      title="Log In"
      subtitle="Welcome back! Please log in to access your account"
    >
      <form className="flex flex-col gap-y-8" onSubmit={handleSubmitForm}>
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

        <Button>Log In</Button>
      </form>
    </Page>
  );
}

export default LogInPage;
