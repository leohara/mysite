import PostBody from "./_presenter/PostBody";

import NotFound from "@/app/(general)/not-found";
import { getWriting } from "@/app/lib/writing";

export default async function Post({ postId }: { postId: string }) {
  const writing = await getWriting(postId);

  return writing.postId == postId ? (
    <PostBody writing={writing} />
  ) : (
    <NotFound />
  );
}
