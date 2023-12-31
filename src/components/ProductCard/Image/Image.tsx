import styles from './Image.module.scss';

export type ImageProps = {
  imagePath: string;

  title: string;
};

export const Image = (props: ImageProps) => {
  const { imagePath, title } = props;

  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={imagePath} alt={title} />
    </div>
  );
};
