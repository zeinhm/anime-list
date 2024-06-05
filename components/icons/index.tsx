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

export const StarIcon = ({ size = 20, ...props }: IconSvgProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 27"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-948.000000, -906.000000)"
        fill="#fff"
        fillRule="nonzero"
      >
        <g transform="translate(906.000000, 880.000000)">
          <g transform="translate(40.000000, 24.000000)">
            <path d="M16.7983826,2.56356746 L19.7968803,11.2875241 L29.1657516,11.3941138 C29.9719564,11.4033379 30.3057022,12.4128653 29.6590696,12.8853446 L22.1424877,18.3829131 L24.9344802,27.1724634 C25.17436,27.9288402 24.3014061,28.55198 23.643301,28.0938493 L16.0005215,22.7674392 L8.35669898,28.0928244 C7.69963687,28.5509551 6.82563997,27.9267904 7.06551979,27.1714385 L9.85751226,18.3818882 L2.34093036,12.8843197 C1.69429781,12.4118404 2.02804364,11.402313 2.83424842,11.3930889 L12.2031197,11.2864992 L15.2016174,2.56254256 C15.4602704,1.81231509 16.5407725,1.81231509 16.7983826,2.56356746 Z"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
