import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}>
    <g xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
      <path d="M22 12.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 0 1.5z" data-original="#000000" />
      <path
        d="M10 20.75a.744.744 0 0 1-.53-.22l-8-8a.749.749 0 0 1 0-1.06l8-8a.75.75 0 1 1 1.06 1.06L3.061 12l7.469 7.47a.75.75 0 0 1-.53 1.28z"
        data-original="#000000"
      />
    </g>
  </svg>
);

const BackIcon = memo(SvgComponent);
export default BackIcon;
