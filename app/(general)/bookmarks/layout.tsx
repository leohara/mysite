import BookmarkList from "./BookmarkList";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <BookmarkList />
      <div className="flex-1">{children}</div>
    </div>
  );
}
