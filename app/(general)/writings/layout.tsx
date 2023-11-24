import { Suspense } from "react";

import Container from "./Container";
import Loading from "./Loading";
import WritingList from "./WritingList";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_0px] lg:grid-cols-[320px_1fr]">
      <Container>
        <Suspense fallback={<Loading />}>
          <WritingList />
        </Suspense>
      </Container>
      {children}
    </div>
  );
}
