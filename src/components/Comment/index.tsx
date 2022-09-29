import { ThumbsUp, Trash } from "phosphor-react";

import useFormatDateTime from "../../hooks/useFormatDateTime";

import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

import { CommentProps } from "./types";

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [publishedDateFormatted, publishedDateRelativeNow] =
    useFormatDateTime();

  function handleDeleteComment() {
    onDeleteComment(comment?.id!);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        url="https://avatars.githubusercontent.com/u/16245261?s=96&v=4"
      />

      <div className={styles["comment-box"]}>
        <div className={styles["comment-content"]}>
          <header>
            <div className={styles["author-and-time"]}>
              <strong>Daniel Silva</strong>
              <time
                title={publishedDateFormatted(new Date(comment?.publishedAt!))}
                dateTime={new Date(comment?.publishedAt!).toISOString()}
              >
                {publishedDateRelativeNow(new Date(comment?.publishedAt!))}
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>

          <p>{comment?.content.text}</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
