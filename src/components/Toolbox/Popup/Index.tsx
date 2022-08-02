import { Alert as AntAlert } from "antd";

export type IAlert = {
  message: string;
  description: string;
  type: "success" | "info" | "warning" | "error" | undefined;
  showIcon: boolean;
};
const Alert = (_props: IAlert) => {
  const { description, message, type, showIcon } = _props;
  return (
    <div style={{ position: "absolute", top: "81vh", left: "79vw", width: "20vw", height: "10vh" }}>
      <AntAlert message={message} description={description} type={type} showIcon={showIcon} />
    </div>
  );
};
export default Alert;
