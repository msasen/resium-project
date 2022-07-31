import { ReactNode } from "react";

import { IThreeDimensionalCoordinate } from "@/interfaces/common/index";

export type IDropdownItem = {
  key: number;
  icons: ReactNode;
  context: string;
  cordinate: IThreeDimensionalCoordinate;
};

export type IDropdownItems = IDropdownItem[];
