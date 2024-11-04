import { PropsWithChildren } from "react";
import Sidebar from "./_components/Sidebar";
import AuthProvider from "./_provider/AuthProvider";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </AuthProvider>
  );
}

export default RootLayout;
