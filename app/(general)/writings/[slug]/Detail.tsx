import Post from "./_presenter/Post";

import NotFound from "@/app/(general)/not-found";
import { getWriting } from "@/app/lib/writing";

export default async function Detail({ postId }: { postId: string }) {
  const writing = await getWriting(postId);

  return writing.postId == postId ? <Post writing={writing} /> : <NotFound />;
}
