import { prisma } from "@/app/lib/db/prisma";
import styles from "./page.module.css";

export default async function Page() {
  const writings = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });
  const bookmarks = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月は0から始まるので1を加える
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const clickHandle = (postId: string) => {
    console.log(postId);
  };

  // F79843

  return (
    <div className="p-[80px]">
      <div className={styles.topicHeader}>
        <div className={styles.statusHeader}> Status</div>
        <div className={styles.titleHeader}> Title</div>
        <div className={styles.createdAtHeader}> Created</div>
        <div className={styles.updatedAtHeader}> Updated</div>
        <div className={styles.contentHeader}> Content</div>
        <div className={styles.createButton}>new</div>
      </div>
      {writings.map((topic) => {
        return (
          <div key={topic.title} className={styles.topicContainer}>
            <div className={styles.wrapper}>
              <div className={styles.status}>
                {topic.published ? "Published" : "Draft"}
              </div>
              <div className={styles.title}>{topic.title}</div>
              <div className={styles.createdAt}>
                {formatDate(topic.createdAt)}
              </div>
              <div className={styles.updatedAt}>
                {formatDate(topic.updatedAt)}
              </div>
              <div className={styles.content}>{topic.content}</div>
              <div
                className={styles.edit}
                // onClick={() => clickHandle(topic.postId)}
              >
                編集する
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
