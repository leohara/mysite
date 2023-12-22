import Container from "./Container";

import Copyright from "@/components/Copyright";
import HeaderContainer from "@/components/HeaderContainer";

export default function Page() {
  return (
    <HeaderContainer position="right">
      <Container />
      <div className="flex justify-center pt-[80px]">
        <Copyright />
      </div>
    </HeaderContainer>
  );
}
