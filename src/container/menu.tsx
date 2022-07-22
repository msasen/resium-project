import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { useCounterDispatch, useCounterSelector } from "@/hooks/storeHook";
import { Icordinate } from "@/interfaces/Iresium";
import mapSlice from "@/store/slice/mapSlice";

const App = () => {
  const DropdownData = useCounterSelector(state => state.menu);
  const dispatch = useCounterDispatch();
  const { update } = mapSlice.actions;

  const goTo = (cordinate: Icordinate) => {
    dispatch(update(cordinate));
  };
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["goTo"]}>
      <Menu.SubMenu key="SubMenu1" title="Go to" icon={<SettingOutlined />}>
        {DropdownData.map((tag, i) => {
          const { icons, context, cordinate } = tag;
          return (
            <Menu.Item
              key={i}
              icon={icons}
              onClick={() => {
                goTo(cordinate);
              }}>
              {context}
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    </Menu>
  );
};
export default App;
