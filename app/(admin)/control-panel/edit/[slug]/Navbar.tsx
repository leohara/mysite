"use client";

import { useContext, useEffect } from "react";
import styles from "./navbar.module.css";
import { EditContext } from "@/app/provider/EditContext";
import PublishSlider from "./PublishSlider";

type EditContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  isDraft: boolean;
  setIsDraft: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar() {
  const { title, setTitle, link, setLink, isDraft, setIsDraft } =
    useContext<EditContextType>(EditContext);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <input
          className={styles.titleBox}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.block}>
          <input
            className={styles.linkBox}
            type="text"
            placeholder="Permanent Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <PublishSlider isDraft={isDraft} setIsDraft={setIsDraft} />
        </div>
        <div className={styles.bottomBox}>
          <input className={styles.tagBox} type="text" placeholder="Tag" />
          <div className={styles.edit}>保存</div>
        </div>
      </div>
    </div>
  );
}
