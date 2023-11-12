import WritingList from "./WritingList";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <WritingList />
      <div className="flex-1">{children}</div>
    </div>
  );
}
