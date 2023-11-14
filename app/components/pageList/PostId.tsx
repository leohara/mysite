export default function PostId({ postId }: { postId: string }) {
  return (
    <div className="h-[40px] w-[200px] rounded-[8px] border-[1px]">
      <div className="line-clamp-2 py-[8px] pl-[8px]">{`/${postId}`}</div>
    </div>
  );
}
