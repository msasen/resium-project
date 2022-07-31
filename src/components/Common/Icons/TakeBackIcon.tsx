import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 206.108 206.108"
    xmlSpace="preserve"
    {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M152.774 69.886H30.728l24.97-24.97a9 9 0 0 0 0-12.728 9 9 0 0 0-12.729 0L2.636 72.523a9 9 0 0 0 0 12.728l40.333 40.333a8.97 8.97 0 0 0 6.364 2.636 9 9 0 0 0 6.364-15.364l-24.97-24.97h122.046c19.483 0 35.334 15.851 35.334 35.334s-15.851 35.334-35.334 35.334H78.531c-4.971 0-9 4.029-9 9s4.029 9 9 9h74.242c29.408 0 53.334-23.926 53.334-53.334s-23.925-53.334-53.333-53.334z"
      data-original="#000000"
    />
  </svg>
);

const TakeBackIcon = memo(SvgComponent);
export default TakeBackIcon;
