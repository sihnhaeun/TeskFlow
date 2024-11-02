import Link from "next/link";
import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineFlag,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import LogOut from "./LogOut";
import Page from "./Page/page";

async function Sidebar() {
  return (
    <Page>
      <nav>
        <ul className="flex flex-col gap-y-16 h-[90vh] font-bold">
          <li>
            <Link className="flex gap-x-4 items-center" href={"/"}>
              <IoIosStats /> Dashboard
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-4 items-center" href={"/todo"}>
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
          <li>
            <Link className="flex gap-x-4 items-center" href={"/settings"}>
              <AiOutlineSetting />
              Settings
            </Link>
          </li>

          <div className="mt-auto flex flex-col gap-y-10">
            <li>
              <Link className="flex gap-x-4 items-center" href={"/log-in"}>
                <FaSignInAlt /> 로그인
              </Link>
            </li>
            <li>
              <Link className="flex gap-x-4 items-center" href={"/sign-up"}>
                <FaUserPlus /> 회원가입
              </Link>
            </li>
            <li>
              <LogOut />
            </li>
          </div>
        </ul>
      </nav>
    </Page>
  );
}

export default Sidebar;
