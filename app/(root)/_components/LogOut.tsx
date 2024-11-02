"use client";

import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

function LogOut() {
  const router = useRouter();

  const handleClickLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return alert("로그아웃에 실패했습니다");

    router.push("/");
    alert("로그아웃에 성공했습니다");
  };

  return (
    <p
      onClick={handleClickLogOut}
      className="flex gap-x-4 items-center cursor-pointer"
    >
      <FaSignOutAlt />
      로그아웃
    </p>
  );
}

export default LogOut;
