export default function PostId({
  postId,
  published,
}: {
  postId: string;
  published: boolean;
}) {
  return (
    <>
      {published ? (
        <a
          href={`/writings/${postId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-[40px] w-[200px] rounded-[8px] border-[1px]">
            <div className="line-clamp-2 py-[8px] pl-[8px]">{`/${postId}`}</div>
          </div>
        </a>
      ) : (
        <div className="h-[40px] w-[200px] rounded-[8px] border-[1px]">
          <div className="line-clamp-2 py-[8px] pl-[8px]">{`/${postId}`}</div>
        </div>
      )}
    </>
  );
}
