import { userProfileState } from 'atoms/userProfile';
import { useRecoilValue } from 'recoil';

type TComment = {
  name: string;
  comment: string;
  isAgree: boolean;
};

const dummyComment: TComment[] = [
  { name: '신림꿀보이스', comment: '꿀꿀', isAgree: true },
  { name: '트', comment: '님 하체 3세트 더', isAgree: false },
];

const Post = () => {
  const { name: userName } = useRecoilValue(userProfileState);

  return (
    <div className="w-full">
      <p className="text-sm mb-2">오늘</p>
      <div className="bg-white p-3 rounded-md flex flex-col gap-3">
        {/* 인증샷 */}
        <img src="https://picsum.photos/600/600" className="w-full" />
        {/* 인증 문구 */}
        <div className="flex justify-between text-sm">
          <span>{userName}</span>
          <span className="text-slate-400">4시간 전</span>
        </div>
        <p>오늘 완전 망햇다 ㅠ 내일은 더 힘내야지</p>
        {/* 구분선 */}
        <hr />
        {/* 댓글 */}
        {dummyComment.slice(0, 2).map((c, index) => (
          <div key={index}>
            <span>{c.name}</span>
            <div className="flex justify-between text-sm">
              <span>{c.comment}</span>
              {c.isAgree ? <span>⭕</span> : <span>💢</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
