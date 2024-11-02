import { PropsWithChildren } from "react";
import Sidebar from "./_components/Sidebar";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default RootLayout;
