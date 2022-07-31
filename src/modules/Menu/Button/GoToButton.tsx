import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { beyogli, anıtkabir, mavinci, theWhiteHouse } from "@/data/cordinate";
import { useDispatch } from "@/hooks/storeHook";
import MapSlice from "@/modules/Globe/goOnGlobe/store/goOnGlobeSlice";

const App = () => {
  const dispatch = useDispatch();
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
      <Menu.SubMenu key="SubMenu2" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
        <Menu.Item
          key="two"
          onClick={() => (window.location.href = "http://localhost:3000/")}
          icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
          Navigation Three
        </Menu.Item>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
};
export default App;
