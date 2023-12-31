import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '@components';
import { purchaseSchema } from '@core/repositories';
import { routes } from '@core/routes';
import { useCartStore } from '@core/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppNavigate } from '@hooks';
import { Button, Modal } from '@shared/UI';
import { formatCardNumber } from '@shared/utils';

import type { PurchaseDto } from '@core/repositories';
import type { CartStore } from '@core/stores';
import type { ChangeEvent } from 'react';
import type { SubmitHandler } from 'react-hook-form';

type PurchaseModalProps = {
  isOpen: boolean;

  onClose: () => void;
};

const cartSelector = (state: CartStore) => [state.completePurchase];
export const PurchaseModal = (props: PurchaseModalProps) => {
  const { isOpen, onClose } = props;

  const navigate = useAppNavigate();

  const [completePurchase] = useCartStore(cartSelector);

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PurchaseDto>({
    resolver: zodResolver(purchaseSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<PurchaseDto> = () => {
    completePurchase();
    onClose();
    navigate(routes.home.root);
  };

  const handleClick = () => {
    formRef?.current?.requestSubmit();
  };

  const handleChangeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    event.target.value = formatCardNumber(value);
  };

  return (
    <>
      <Modal
        size="sm"
        title="Complete purchase"
        isOpen={isOpen}
        onClose={onClose}
        actions={
          <Button type="submit" onClick={handleClick}>
            Complete
          </Button>
        }
      >
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
            placeholder="Email"
          />
          <FormInput
            label="Card number"
            name="cardNumber"
            onChange={handleChangeCardNumber}
            register={register}
            errors={errors}
            placeholder="0000 0000 0000 0000"
          />
        </form>
      </Modal>
    </>
  );
};
