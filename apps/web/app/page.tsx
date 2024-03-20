import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Hello {process.env.TEST}</h1>
    </main>
  );
}
