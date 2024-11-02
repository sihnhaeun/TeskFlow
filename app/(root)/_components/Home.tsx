"use client";

import { useAuthStore } from "@/zustand/auth.store";

function Home() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <div className="grid gap-y-7 text-center">
          {/* 로그인을 하지 않은 상태에서 무엇을 보여줄까.. 고민 중 */}

          <div>
            <h4 className="text-lg font-bold ">서비스 소개</h4>
            <hr />
            <p>모든 작업을 관리할 수 있는 플랫폼입니다</p>
            <p>가입하고 더 많은 기능을 이용해보세요</p>
          </div>

          <div>
            <h4 className="text-lg font-bold ">하이라이트 기능</h4>
            <hr />
            <p>대시보드</p>
            <p>일정 관리</p>
            <p>투두리스트</p>
          </div>

          <div>
            <h4 className="text-lg font-bold ">뉴스</h4>
            <hr />
            <p>업데이트: 1323213</p>
            <p>이벤트: 4ft32r32f3</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
