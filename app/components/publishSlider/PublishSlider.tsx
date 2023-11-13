import React, { Dispatch, SetStateAction } from "react";
import styles from "./publishSlider.module.css";

type Props = {
  isDraft: boolean;
  setIsDraft: Dispatch<SetStateAction<boolean>>;
};

const PublishSlider = ({ isDraft, setIsDraft }: Props) => {

  return (
    <div className={styles.container}>
      <input
        checked={isDraft}
        onChange={() => setIsDraft(!isDraft)}
        id={`switchNew`}
        className={styles.switch}
        type="checkbox"
        name="isPublished"
      />
      <label
        style={{ background: isDraft ? "#3EA8FF" : "" }}
        className={styles.switchLabel}
        htmlFor={`switchNew`}
      >
        <span className={styles.switchButton} />
      </label>
      <p
        className={styles.publish}
        style={{ color: isDraft ? "black" : "#757575" }}
      >
        {isDraft ? "Published" : "Draft"}
      </p>
    </div>
  );
};

export default PublishSlider;
