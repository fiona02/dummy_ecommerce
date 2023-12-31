export const useGetClassWithPrefix = (className: string, customPrefix?: string) => {
  const prefix = customPrefix ?? 'ui';

  const rootClass = `${prefix}-${className}`;

  const appendClass = (childClass: string | string[]) => {
    if (Array.isArray(childClass)) {
      return childClass.map((child) => `${rootClass}${child}`).join(' ');
    }

    return `${rootClass}${childClass}`;
  };

  return { rootClass, appendClass };
};
