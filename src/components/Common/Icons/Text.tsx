import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" xmlSpace="preserve" {...props}>
    <path
      d="M376 512H136c-33.084 0-60-26.916-60-60V60c0-33.084 26.916-60 60-60h240c33.084 0 60 26.916 60 60s-26.916 60-60 60H196v76h129c33.084 0 60 26.916 60 60s-26.916 60-60 60H196v76h180c33.084 0 60 26.916 60 60s-26.916 60-60 60zM136 30c-16.542 0-30 13.458-30 30v392c0 16.542 13.458 30 30 30h240c16.542 0 30-13.458 30-30s-13.458-30-30-30H181c-8.284 0-15-6.716-15-15V301c0-8.284 6.716-15 15-15h144c16.542 0 30-13.458 30-30s-13.458-30-30-30H181c-8.284 0-15-6.716-15-15V105c0-8.284 6.716-15 15-15h195c16.542 0 30-13.458 30-30s-13.458-30-30-30z"
      data-original="#000000"
      xmlns="http://www.w3.org/2000/svg"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
