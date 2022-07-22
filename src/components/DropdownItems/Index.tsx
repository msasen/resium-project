import { Menu } from "antd";

import { IDropdownItem } from "@/interfaces/Iui";

const DropdownItems = (Args: IDropdownItem) => {
  const { icons, context } = Args;
  const key = `mvc_${Math.random() * 100}x`;
  console.log(key);

  return (
    <Menu.Item key={key} icon={icons}>
      {context}
    </Menu.Item>
  );
};
export default DropdownItems;
