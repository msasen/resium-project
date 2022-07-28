import { useSelector } from "@/hooks/storeHook";

const ClickForDraw = () => {
  const { lat, long } = useSelector(store => store.position);
  alert(lat + " " + long);
};

export default ClickForDraw;
