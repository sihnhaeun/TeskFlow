import Dashboard from "./_components/Dashboard";
import Home from "./_components/Home";
import Page from "./_components/Page/page";

export default function HomePage() {
  return (
    <Page title="title" subtitle="subtitle">
      <Dashboard /> {/* 로그인 했을 때 */}
      <Home /> {/* 로그인 안 했을 때 */}
    </Page>
  );
}
