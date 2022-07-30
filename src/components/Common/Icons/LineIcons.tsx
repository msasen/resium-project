import { memo } from "react";

export type IColor = {
  fill: string;
};

const SvgComponent = (props: IColor) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 160.607 160.607"
    xmlSpace="preserve"
    fill={props.fill}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m60.669 89.331 35.592-35.592 10.606 10.608-35.591 35.591-10.607-10.607zm71.275-50.061 28.663-28.662L150.001 0l-28.663 28.662 10.606 10.608zm-96.351 75.137L.001 150l10.606 10.607 35.592-35.593-10.606-10.607z"
      data-original="#000000"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
