import { useSelector, useDispatch } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import { ICoordinates } from "@/modules/Globe/Draw/store/type";

type Props = {};

const OnClick = (_props: Props) => {
  const state = useSelector(store => store.drawSlice);
  console.log(state);
  const dispatch = useDispatch();
  const { addPoitIOnLastLine } = DrawSlice.actions;
  const cord: ICoordinates = [44, 66];
  function click() {
    dispatch(addPoitIOnLastLine(cord));
  }
  return (
    <div style={{ position: "absolute", background: "red", top: "0px", left: "40px" }}>
      <button
        style={{ background: "cyan" }}
        onClick={() => {
          click();
        }}
      />
    </div>
  );
};

export default OnClick;
