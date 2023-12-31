import type { SVGProps } from 'react';

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    color="#FFC831"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="m11.643 5.904 4.082.62c.338.05.622.297.73.634.108.34.02.709-.225.96l-2.96 2.994.7 4.295a.948.948 0 0 1-.367.916.887.887 0 0 1-.957.068l-3.647-2.007-3.645 2.007a.892.892 0 0 1-.96-.067.946.946 0 0 1-.363-.917l.699-4.295-2.96-2.994a.963.963 0 0 1-.225-.96.911.911 0 0 1 .731-.633l4.078-.621 1.83-3.876a.903.903 0 0 1 .815-.528c.349 0 .667.205.818.528l1.826 3.876Z"
    />
  </svg>
);
