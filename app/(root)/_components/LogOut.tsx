"use client";

import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

function LogOut() {
  const router = useRouter();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const handleClickLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) return alert("로그아웃에 실패했습니다");

    setIsLoggedIn(false);
    router.push("/");
    alert("로그아웃에 성공했습니다");
  };

  return (
    <p
      onClick={handleClickLogOut}
      className="flex gap-x-4 items-center cursor-pointer"
    >
      <FaSignOutAlt />
      Log Out
    </p>
  );
}

export default LogOut;
