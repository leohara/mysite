import { Suspense } from "react";

import Container from "./Container";
import Post from "./Post";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <Suspense fallback={<p>Loading</p>}>
        <Post postId={params.slug} />
      </Suspense>
    </Container>
  );
}
