"use client";

import { useParams } from "next/navigation";

// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export default function BoardPages() {
  // const router = useRouter();
  // console.log(router);

  // console.log("라우터 정상 작동 확인 : " + router.query.boardId);

  const params = useParams();
  const searchParams = useSearchParams();

  console.log(params ? params.boardId : "No boardId found");

  // console.log(searchParams);
  return (
    <>
      <div>게시글아이디 : {params ? params.boardId : ""}</div>
      <div> 게시판 상세 동적 페이지 입니다.</div>
      <div>getServerSideProps주석화시킴</div>
    </>
  );
}

// export const getServerSideProps = () => {
// 만약 서버사이드 렌더링을 하는 페이지라면 => out 폴더 생성 불가
//  => 이런 경우 next.config.js 에서 exportPathMap으로 현제 페이지 제외시키기
// };
