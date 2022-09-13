import styles from "./styles.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/16245261?v=4"
          />

          <div className={styles["author-info"]}>
            <strong>Daniel Silva</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="13 de Setembro às 17:04" dateTime="2022-09-13 17:04:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>

          <a href="">#nlw </a>

          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
