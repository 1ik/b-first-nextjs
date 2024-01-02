import styles from './news-site-ui.module.scss';

/* eslint-disable-next-line */
export interface NewsSiteUiProps {}

export function NewsSiteUi(props: NewsSiteUiProps) {
  return (
    <div className={styles['container']}>
      <h1>BangladeshFirst</h1>
    </div>
  );
}

export default NewsSiteUi;
