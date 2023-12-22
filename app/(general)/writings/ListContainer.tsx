import { Suspense } from "react";

import HeaderContainer from "../../../components/HeaderContainer";

import Spinner from "@/components/Spinner";

export default function ListContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderContainer position="middle">
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </HeaderContainer>
  );
}
