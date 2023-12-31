import type { SVGProps } from 'react';

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    color="#637381"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="m3.216 11.197 5.882 5.138c.244.213.567.332.902.332.335 0 .658-.12.902-.332l5.882-5.138c.99-.861 1.55-2.07 1.55-3.334v-.177c0-2.128-1.645-3.943-3.887-4.293-1.485-.232-2.995.222-4.056 1.215L10 4.973l-.39-.365C8.547 3.615 7.037 3.16 5.552 3.393c-2.242.35-3.886 2.165-3.886 4.293v.177c0 1.264.56 2.473 1.55 3.334Z"
    />
  </svg>
);
