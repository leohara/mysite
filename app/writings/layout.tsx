import WritingList from "./WritingList";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex pl-[200px]">
      <WritingList />
      <div className="flex-1">{children}</div>
    </div>
  );
}
