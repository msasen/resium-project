import BackIcon from "@/components/Common/Icons/BackIcon";
import { useDispatch } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";

const TakeBackCordinate = () => {
  const dispatch = useDispatch();
  const { TakeBackCordinate } = DrawSlice.actions;

  return (
    <button
      className="flex"
      onClick={() => {
        dispatch(TakeBackCordinate());
      }}>
      <BackIcon />
    </button>
  );
};

export default TakeBackCordinate;
