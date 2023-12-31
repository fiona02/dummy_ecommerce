import { useCartStore } from '@core/stores';
import { useModalState } from '@hooks';
import { Button, CartPlusIcon } from '@shared/UI';

import { PurchaseModal } from '../PurchaseModal';

import type { CartStore } from '@core/stores';

const cartSelector = (state: CartStore) => [state.totalCount];
export const CompletePurchase = () => {
  const [totalCount] = useCartStore(cartSelector);

  const { isOpen, onClose, onOpen } = useModalState();

  return (
    <>
      <Button
        disabled={totalCount === 0}
        shape="circle"
        icon={<CartPlusIcon />}
        onClick={onOpen}
      ></Button>
      <PurchaseModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
