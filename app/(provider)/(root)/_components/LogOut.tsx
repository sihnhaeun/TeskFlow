"use client";

import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

function LogOut() {
  const router = useRouter();

  const handleClickLogOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    return alert("로그아웃에 성공했습니다");
  };

  return (
    <p
      onClick={handleClickLogOut}
      className="flex gap-x-4 items-center cursor-pointer hover:text-[#3498DB] transition"
    >
      <FaSignOutAlt />
      Log Out
    </p>
  );
}

export default LogOut;
