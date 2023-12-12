import Container from "./Container";
import WritingList from "./_presenter/WritingList";

import { getWritings } from "@/components/writing";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const publishedWritings = await getWritings();

  return (
    <div className="grid grid-cols-[1fr_0px] lg:grid-cols-[320px_1fr]">
      <Container>
        <WritingList publishedWritings={publishedWritings} />
      </Container>
      {children}
    </div>
  );
}
