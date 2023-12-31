import * as z from 'zod';

export const signinSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(4, { message: 'Password length must be at least 4 characters' }),
});

export type SigninDto = z.infer<typeof signinSchema>;
