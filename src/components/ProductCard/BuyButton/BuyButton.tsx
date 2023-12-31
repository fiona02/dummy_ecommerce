import { Button, CartPlusIcon } from '@shared/UI';

export type BuyButtonProps = {
  onClickBuy?: () => void;
};

export const BuyButton = (props: BuyButtonProps) => {
  const { onClickBuy } = props;

  return (
    <Button
      icon={<CartPlusIcon />}
      shape="circle"
      btnType="secondary"
      onClick={onClickBuy}
    ></Button>
  );
};
