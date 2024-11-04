import Dashboard from "./_components/Dashboard";
import Home from "./_components/Home";

export default function HomePage() {
  return (
    <>
      <Dashboard /> {/* 로그인 했을 때 */}
      <Home /> {/* 로그인 안 했을 때 */}
    </>
  );
}
