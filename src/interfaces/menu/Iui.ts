import { ReactNode } from "react";

import { Icordinate } from "../globe/Iresium";

export type IDropdownItem = {
  key: number;
  icons: ReactNode;
  context: string;
  cordinate: Icordinate;
};

export type IDropdownItems = IDropdownItem[];
