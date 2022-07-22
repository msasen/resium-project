import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { beyogli, anıtkabir, mavinci, theWhiteHouse } from "@/data/cordinate";
import { useCounterDispatch } from "@/hooks/storeHook";
import MapSlice from "@/store/slice/mapSlice";

const App = () => {
  const dispatch = useCounterDispatch();
  const { update } = MapSlice.actions;

  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.SubMenu key="SubMenu1" title="Go to" icon={<SettingOutlined />}>
        <Menu.Item
          key="etwo"
          onClick={() => dispatch(update(theWhiteHouse))}
          icon={<AppstoreOutlined />}>
          Go to the white house
        </Menu.Item>
        <Menu.Item
          key="ethree"
          onClick={() => dispatch(update(mavinci))}
          icon={<AppstoreOutlined />}>
          Go to mavinci
        </Menu.Item>
        <Menu.ItemGroup title="eItem Group">
          <Menu.Item
            key="efour"
            onClick={() => dispatch(update(anıtkabir))}
            icon={<AppstoreOutlined />}>
            Go to anıtkabir
          </Menu.Item>
          <Menu.Item
            key="efive"
            onClick={() => dispatch(update(beyogli))}
            icon={<AppstoreOutlined />}>
            Go to beyogli
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
};
export default App;
