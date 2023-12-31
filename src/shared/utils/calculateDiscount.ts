export const calculateDiscount = (price: number, discount: number, fraction = 0) => {
  const result = price * ((100 - discount) / 100);

  return result.toFixed(fraction);
};
