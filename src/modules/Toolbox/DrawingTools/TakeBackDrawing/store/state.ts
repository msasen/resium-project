export enum ActiveButton {
  ANY = "any",
  LINE = "line",
  POLYGON = "polygon",
  TEXT = "text",
}
export type IActiveButton = ActiveButton;
export type IState = {
  activeButton: IActiveButton[];
};
export const state: IState = {
  activeButton: [ActiveButton.ANY, ActiveButton.LINE],
};
