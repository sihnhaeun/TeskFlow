import Link from "next/link";
import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineFlag,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import Page from "./Page/page";

function Sidebar() {
  return (
    <Page>
      <nav>
        <ul className="flex flex-col gap-y-16 h-[90vh] font-bold">
          <li className="flex gap-x-4 items-center">
            <IoIosStats /> <Link href={"/"}>Dashboard</Link>
          </li>
          <li className="flex gap-x-4 items-center">
            <AiOutlineCheckCircle /> <Link href={"/todo"}>To-Do List</Link>
          </li>
          <li className="flex gap-x-4 items-center">
            <AiOutlineCalendar /> <Link href={"/calendar"}>Calendar</Link>
          </li>
          <li className="flex gap-x-4 items-center">
            <AiOutlineFlag /> <Link href={"/goals"}>Goals</Link>
          </li>
          <li className="flex gap-x-4 items-center">
            <AiOutlineSetting /> <Link href={"/settings"}>Settings</Link>
          </li>

          <div className="mt-auto flex flex-col gap-y-10">
            <li className="flex gap-x-4 items-center">
              <FaSignInAlt /> <Link href={"/log-in"}>로그인</Link>
            </li>
            <li className="flex gap-x-4 items-center">
              <FaUserPlus /> <Link href={"/sign-up"}>회원가입</Link>
            </li>
            <li className="flex gap-x-4 items-center">
              <FaSignOutAlt /> <p className="cursor-pointer">로그아웃</p>
            </li>
          </div>
        </ul>
      </nav>
    </Page>
  );
}

export default Sidebar;
