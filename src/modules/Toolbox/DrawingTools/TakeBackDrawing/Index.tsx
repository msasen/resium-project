import TakeBackIcon from "@/components/Common/Icons/TakeBackIcon";
import { useSelector, useDispatch } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";

type Props = {};

const TakeBackDrawing = (_props: Props) => {
  // const { activeButton } = useSelector(store => store.takeBackDrawing);
  const dispatch = useDispatch();
  const { TakeBackDrawing } = DrawSlice.actions;

  return (
    <button
      className="flex"
      onClick={() => {
        dispatch(TakeBackDrawing());
      }}>
      <TakeBackIcon />
    </button>
  );
};

export default TakeBackDrawing;
