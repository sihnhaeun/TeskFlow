"use client";

import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import Page from "../../_components/Page/page";
import InputField from "../_components/InputField";

function SignUpPage() {
  const router = useRouter();

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

    router.push("/");
    alert("가입에 성공했습니다");
  };

  return (
    <Page>
      <h2 className="text-2xl text-center font-bold">회원가입</h2>
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
        <InputField
          change={setRePassword}
          label={"Re-enter Password"}
          type={"password"}
          id={"rePassword"}
        />

        <button
          className="border rounded-lg h-10 bg-white hover:border-black active:brightness-95"
          type="submit"
        >
          가입하기
        </button>
      </form>
    </Page>
  );
}

export default SignUpPage;
