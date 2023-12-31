import * as z from 'zod';

export const purchaseSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email' }),
  cardNumber: z.string().min(1, { message: 'Card number is required' }),
});

export type PurchaseDto = z.infer<typeof purchaseSchema>;
