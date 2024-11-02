"use client";

import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import Page from "../../_components/Page/page";
import Button from "../_components/Button";
import InputField from "../_components/InputField";

function SignUpPage() {
  const router = useRouter();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!email || !password || !rePassword) return alert("빈칸이 있습니다");
    if (!email.includes("@") || !email.includes("."))
      return alert("이메일 형식에 어긋났습니다");
    if (!(password.length && rePassword.length > 7))
      return alert("비밀번호는 8글자 이상으로 적어주세요");
    if (password !== rePassword) return alert("비밀번호가 다릅니다");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log("sign-up error", error);
      return alert("가입에 실패했습니다");
    }

    setIsLoggedIn(true);
    router.push("/");
    alert("가입에 성공했습니다");
  };

  return (
    <Page
      title="Sign Up"
      subtitle="Create an account to start your journey with us!"
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
        <InputField
          change={setRePassword}
          label={"Re-enter Password"}
          type={"password"}
          id={"rePassword"}
        />

        <Button>Sign Up</Button>
      </form>
    </Page>
  );
}

export default SignUpPage;
