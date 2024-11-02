import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

function Page({ children, title, subtitle }: PageProps) {
  return (
    <main className="px-7 py-8 w-full">
      <div className="flex flex-col gap-y-2 text-center mb-10">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm">{subtitle}</p>
      </div>

      {children}
    </main>
  );
}

export default Page;
