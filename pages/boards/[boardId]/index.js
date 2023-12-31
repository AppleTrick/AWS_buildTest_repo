import { useRouter } from "next/router";

export default function BoardPages() {
  const router = useRouter();
  return (
    <>
      <div>게시글아이디 : {router.query.boardId}</div>
      <div> 게시판 상세 동적 페이지 입니다.</div>
    </>
  );
}
