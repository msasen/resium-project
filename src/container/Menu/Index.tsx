import { SettingOutlined } from "@ant-design/icons";
import { Menu as AntMenu } from "antd";

import CheckBoxForMenu from "@/components/Menu/FrameControl/Index";
import { Frame } from "@/enum";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import { Icordinate } from "@/interfaces/Iresium";
import mapSlice from "@/store/slice/mapSlice";
// import { IgetMousePointPosition } from "@/Toolbox/interface";

// type Iprops = { positionData: IgetMousePointPosition };

const Menu = () => {
  // const { positionData } = props;
  const GoTo = useSelector(state => state.menu);
  const dispatch = useDispatch();
  const { update } = mapSlice.actions;
  const goTo = (cordinate: Icordinate) => {
    dispatch(update(cordinate));
  };
  return (
    <div>
      <AntMenu mode="horizontal" defaultSelectedKeys={["goTo"]}>
        <AntMenu.SubMenu key="SubMenu1" title="Go to" icon={<SettingOutlined />}>
          {GoTo.map((tag, i) => {
            const { icons, context, cordinate } = tag;
            return (
              <AntMenu.Item
                key={i}
                icon={icons}
                onClick={() => {
                  goTo(cordinate);
                }}>
                {context}
              </AntMenu.Item>
            );
          })}
        </AntMenu.SubMenu>
        <AntMenu.SubMenu key="Layer" title="Select Layer" icon={<SettingOutlined />}>
          <AntMenu.ItemGroup title="Layers">
            <AntMenu.SubMenu key="Layer2D" title="2D Layer" icon={<SettingOutlined />}>
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
            </AntMenu.SubMenu>
            <AntMenu.SubMenu key="Layer3D" title="3D Layer" icon={<SettingOutlined />}>
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
            </AntMenu.SubMenu>
          </AntMenu.ItemGroup>
        </AntMenu.SubMenu>
        <div style={{ position: "absolute", right: 0, bottom: 0 }}>
          {/* lat: {positionData?.lat} lon: {positionData?.long} yükseklik: {positionData?.height} */}
        </div>
      </AntMenu>
    </div>
  );
};
export default Menu;