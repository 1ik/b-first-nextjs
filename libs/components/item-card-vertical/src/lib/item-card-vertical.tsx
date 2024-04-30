import styles from "./item-card-vertical.module.scss";

/* eslint-disable-next-line */
export interface ItemCardVerticalProps {}

export function ItemCardVertical(props: ItemCardVerticalProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to ItemCardVertical!</h1>
    </div>
  );
}

export default ItemCardVertical;
