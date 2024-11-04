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
    <nav className="bg-[#2C3E50] text-[#ECF0F1] px-7 py-8 w-[200px] h-screen ">
      <ul className="flex flex-col gap-y-16  h-full font-bold">
        {isLoggedIn ? (
          <li>
            <Link
              className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
              href={"/"}
            >
              <IoIosStats /> Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
              href={"/"}
            >
              <AiOutlineHome /> Home
            </Link>
          </li>
        )}
        <li>
          <Link
            className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
            href={"/todos"}
          >
            <AiOutlineCheckCircle /> To-Do List
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
            href={"/calendar"}
          >
            <AiOutlineCalendar /> Calendar
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
            href={"/goals"}
          >
            <AiOutlineFlag /> Goals
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link
              className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
              href={"/settings"}
            >
              <AiOutlineSetting />
              Settings
            </Link>
          </li>
        )}

        <div className="mt-auto flex flex-col gap-y-10">
          {!isLoggedIn ? (
            <>
              <li>
                <Link
                  className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
                  href={"/log-in"}
                >
                  <FaSignInAlt /> Log In
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-x-4 items-center hover:text-[#3498DB] transition"
                  href={"/sign-up"}
                >
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
