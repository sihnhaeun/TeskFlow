import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <main className="px-7 py-8">{children}</main>;
}

export default Page;
