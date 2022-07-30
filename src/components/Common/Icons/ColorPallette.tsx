export type IColor = {
  fill: string;
};

const ColorPallete = (props: IColor) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 426.667 426.667"
    xmlSpace="preserve"
    className="hovered-paths"
    fill={props.fill}>
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        d="M213.333 106.667c-58.88 0-106.667 47.787-106.667 106.667S154.453 320 213.333 320 320 272.213 320 213.333s-47.787-106.666-106.667-106.666z"
        data-original="#000000"
        className="hovered-path"
      />
      <path
        d="M213.333 0C95.467 0 0 95.467 0 213.333s95.467 213.333 213.333 213.333S426.667 331.2 426.667 213.333 331.2 0 213.333 0zm0 384c-94.293 0-170.667-76.373-170.667-170.667S119.04 42.667 213.333 42.667 384 119.04 384 213.333 307.627 384 213.333 384z"
        data-original="#000000"
        className="hovered-path"
      />
    </g>
  </svg>
);

export default ColorPallete;
