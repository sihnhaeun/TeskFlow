"use client";

import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import Page from "../../_components/Page/page";
import DefaultButton from "../_components/DefaultButton";
import InputField from "../_components/InputField";

function LogInPage() {
  const router = useRouter();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Please fill in all fields");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("log-in error", error);
      return alert("Login failed. Please check your email and password");
    }

    setIsLoggedIn(true);
    router.push("/");
    alert("Login successful! Welcome back!");
  };

  return (
    <Page
      title="Log In"
      subtitle="Welcome back! Please log in to access your account"
    >
      <form
        className="flex flex-col gap-y-8 m-auto w-[480px]"
        onSubmit={handleSubmitForm}
      >
        <InputField
          value={email}
          change={setEmail}
          label={"Email"}
          type={"email"}
          id={"email"}
        />

        <InputField
          value={password}
          change={setPassword}
          label={"Password"}
          type={"password"}
          id={"password"}
        />

        <DefaultButton variantStyle="primary">Log In</DefaultButton>
      </form>
    </Page>
  );
}

export default LogInPage;
