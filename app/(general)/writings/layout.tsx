export const dynamic = "force-dynamic";

import Container from "./Container";
import WritingList from "./_presenter/WritingList";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr_0px] lg:grid-cols-[320px_1fr]">
      <Container>
        <WritingList />
      </Container>
      {children}
    </div>
  );
}
