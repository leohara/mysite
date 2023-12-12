import WritingCard from "./WritingCard";

type Props = {
  id: string;
  title: string;
  published: boolean;
  publishedAt: Date | null;
  postId: string;
};

export default async function WritingList({
  publishedWritings,
}: {
  publishedWritings: Props[];
}) {
  return (
    <div className=" pt-[64px]">
      <div className="flex-col px-[24px]">
        {publishedWritings.map((writing) => (
          <WritingCard writing={writing} key={writing.id} />
        ))}
      </div>
    </div>
  );
}
