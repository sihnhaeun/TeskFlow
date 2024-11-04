import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

function Page({ children, title, subtitle }: PageProps) {
  return (
    <main className=" bg-[#F4F7FA] px-7 py-8 w-full h-screen overflow-y-hidden">
      <div className="flex flex-col gap-y-2 text-center mb-10">
        <h2 className="text-2xl font-bold text-[#2980B9]">{title}</h2>
        <p className="text-sm text-[#7F8C8D]">{subtitle}</p>
      </div>

      <div className="text-[#34495E]">{children}</div>
    </main>
  );
}

export default Page;
