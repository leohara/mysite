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
          <div className="text-blue-400">
            <div className="line-clamp-2">{`/${postId}`}</div>
          </div>
        </a>
      ) : (
        <div className="">
          <div className="line-clamp-2">{`/${postId}`}</div>
        </div>
      )}
    </>
  );
}
