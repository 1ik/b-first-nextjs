import styles from "./ad-manager.module.scss";

/* eslint-disable-next-line */
export interface AdManagerProps {}

export function AdList(props: AdManagerProps) {
  return (
    <div className={styles["container"]}>
      <h1>Add List</h1>
    </div>
  );
}
