import { Suspense } from "react";

import Container from "./Container";
import Post from "./_presenter/Post";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Post postId={params.slug} />
      </Suspense>
    </Container>
  );
}
