import * as React from "react";
import { SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const SearchIcon = ({ size = 20, ...props }: IconSvgProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.026 13.848l3.569 3.568-1.18 1.18-3.568-3.57a7.466 7.466 0 01-4.68 1.64c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.467 7.467 0 01-1.641 4.682zm-1.672-.619A5.814 5.814 0 0015 9.167a5.832 5.832 0 00-5.834-5.834 5.831 5.831 0 00-5.833 5.834A5.832 5.832 0 009.166 15a5.814 5.814 0 004.063-1.646l.125-.125z"
      fill="currentColor"
    />
  </svg>
);
