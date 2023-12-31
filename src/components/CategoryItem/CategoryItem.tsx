import cl from 'classnames';

import styles from './CategoryItem.module.scss';

export type CategoryItemProps = {
  category: string;

  isActive?: boolean;

  onClick?: (category: string) => void;
};

export const CategoryItem = (props: CategoryItemProps) => {
  const { category, isActive, onClick } = props;

  const classes = cl(styles.categoryItem, {
    [styles.active]: isActive,
  });

  const handleClickCategory = () => {
    onClick?.(category);
  };

  return (
    <span className={classes} onClick={handleClickCategory}>
      {category}
    </span>
  );
};
