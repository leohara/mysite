import Container from "./Container";
import WritingList from "./WritingList";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_0px] lg:grid-cols-[320px_1fr]">
      <Container>
        <WritingList />
      </Container>
      {children}
    </div>
  );
}
