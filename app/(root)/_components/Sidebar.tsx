"use client";

import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineFlag,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import LogOut from "./LogOut";

function Sidebar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <nav className="px-7 py-8">
      <ul className="flex flex-col gap-y-16 w-[110px] h-[90vh] font-bold">
        {isLoggedIn ? (
          <li>
            <Link className="flex gap-x-4 items-center" href={"/"}>
              <IoIosStats /> Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link className="flex gap-x-4 items-center" href={"/"}>
              <AiOutlineHome /> Home
            </Link>
          </li>
        )}
        <li>
          <Link className="flex gap-x-4 items-center" href={"/todos"}>
            <AiOutlineCheckCircle /> To-Do List
          </Link>
        </li>
        <li>
          <Link className="flex gap-x-4 items-center" href={"/calendar"}>
            <AiOutlineCalendar /> Calendar
          </Link>
        </li>
        <li>
          <Link className="flex gap-x-4 items-center" href={"/goals"}>
            <AiOutlineFlag /> Goals
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link className="flex gap-x-4 items-center" href={"/settings"}>
              <AiOutlineSetting />
              Settings
            </Link>
          </li>
        )}

        <div className="mt-auto flex flex-col gap-y-10">
          {!isLoggedIn ? (
            <>
              <li>
                <Link className="flex gap-x-4 items-center" href={"/log-in"}>
                  <FaSignInAlt /> Log In
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-4 items-center" href={"/sign-up"}>
                  <FaUserPlus /> Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li>
              <LogOut />
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Sidebar;
