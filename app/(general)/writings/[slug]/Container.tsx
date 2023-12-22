import { Suspense } from "react";

import HeaderContainer from "@/components/HeaderContainer";
import Spinner from "@/components/Spinner";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <HeaderContainer position="right-detail">
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </HeaderContainer>
  );
}
