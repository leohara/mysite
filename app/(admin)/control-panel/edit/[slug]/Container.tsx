"use client";

import React, { useState } from "react";
import { EditContext } from "@/app/provider/EditContext";
import { TextContext } from "@/app/provider/TextContext";
import Navbar from "./Navbar";
import styles from "./container.module.css";

type Writing = {
  id: string;
  title: string;
  postId: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default function Container({ writing }: { writing: Writing }) {
  const [postIds, setPostIds] = useState<string[] | null>([]);
  const [title, setTitle] = useState<string>(writing.title);
  const [link, setLink] = useState<string>(writing.postId);
  const [isDraft, setIsDraft] = useState<boolean>(writing.published);
  const [markdown, setMarkdown] = useState<string>(
    writing.content ? writing.content : "",
  );

  return (
    <TextContext.Provider value={{ markdown, setMarkdown }}>
      <EditContext.Provider
        value={{ title, setTitle, link, setLink, isDraft, setIsDraft }}
      >
        <Navbar writing={writing} />
      </EditContext.Provider>
      <div className={styles.postContainer}>
        <div className={styles.wrapper}>
          <div className={styles.previewContainer}>{writing.content}</div>
          <div className={styles.editContainer}>
            <textarea
              className={styles.textarea}
              placeholder="write your post here ..."
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>
        </div>
      </div>
    </TextContext.Provider>
  );
}
