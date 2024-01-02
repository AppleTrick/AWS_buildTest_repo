import { useRouter } from "next/router";

export default function BoardPages() {
  const router = useRouter();
  console.log(router);
  console.log("라우터 정상 작동 확인 : " + router.query.boardId);

  return (
    <>
      <div>게시글아이디 : {router.query.boardId}</div>
      <div> 게시판 상세 동적 페이지 입니다.</div>
    </>
  );
}
