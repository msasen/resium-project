import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import CheckBoxForMenu from "@/components/CheckBoxForMenu/Index";
import { Frame } from "@/enum";
import { useCounterDispatch, useCounterSelector } from "@/hooks/storeHook";
import { Icordinate } from "@/interfaces/Iresium";
import mapSlice from "@/store/slice/mapSlice";
// import { IgetMousePointPosition } from "@/Toolbox/interface";

// type Iprops = { positionData: IgetMousePointPosition };

const App = () => {
  // const { positionData } = props;
  const GoTo = useCounterSelector(state => state.menu);
  const dispatch = useCounterDispatch();
  const { update } = mapSlice.actions;
  const goTo = (cordinate: Icordinate) => {
    dispatch(update(cordinate));
  };
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={["goTo"]}>
        <Menu.SubMenu key="SubMenu1" title="Go to" icon={<SettingOutlined />}>
          {GoTo.map((tag, i) => {
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
        <Menu.SubMenu key="Layer" title="Select Layer" icon={<SettingOutlined />}>
          <Menu.ItemGroup title="Layers">
            <Menu.SubMenu key="Layer2D" title="2D Layer" icon={<SettingOutlined />}>
              <CheckBoxForMenu Content="World_Street" defaultChecked id={Frame.world_Street_Map} />
              <CheckBoxForMenu
                Content="World_Terrian"
                defaultChecked={false}
                id={Frame.world_Terrain_Base}
              />
              <CheckBoxForMenu
                Content="Topo_Map"
                defaultChecked={false}
                id={Frame.world_Topo_Map}
              />
            </Menu.SubMenu>
            <Menu.SubMenu key="Layer3D" title="3D Layer" icon={<SettingOutlined />}>
              <CheckBoxForMenu
                Content="NatGeo_Map"
                defaultChecked={false}
                id={Frame.NatGeo_World_Map}
              />
              <CheckBoxForMenu
                Content="World_physical"
                defaultChecked={false}
                id={Frame.world_Physical_Map}
              />
              <CheckBoxForMenu
                Content="World_shaded"
                defaultChecked={false}
                id={Frame.world_Shaded_Relief}
              />
            </Menu.SubMenu>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <div style={{ position: "absolute", right: 0, bottom: 0 }}>
          {/* lat: {positionData?.lat} lon: {positionData?.long} yükseklik: {positionData?.height} */}
        </div>
      </Menu>
    </div>
  );
};
export default App;
