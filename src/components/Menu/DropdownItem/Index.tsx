import { Menu } from "antd";

import { IDropdownItem } from "@/interfaces/menu/Index";

const DropdownItem = (Args: IDropdownItem) => {
  const { icons, context } = Args;
  const key = `mvc_${Math.random() * 100}x`;

  return (
    <Menu.Item key={key} icon={icons}>
      {context}
    </Menu.Item>
  );
};
export default DropdownItem;
