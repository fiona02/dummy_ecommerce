import type { SVGProps } from 'react';

export const HouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    color="#919EAB"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.667 8.912c0-.47.194-.915.542-1.231l6.66-5.068a1.672 1.672 0 0 1 2.258 0l6.664 5.068c.344.316.542.761.542 1.23l-1.655 7.8c-.344.741-.748 1.112-1.67 1.112H4.988c-.921 0-1.267 0-1.669-1.113L1.667 8.912Zm6.66 3.718v2.225c0 .463.372.742.835.742h1.67c.462 0 .834-.279.834-.742V12.63c0-.463-.372-.742-.835-.742H9.162c-.463 0-.835.28-.835.742Z"
    />
  </svg>
);
