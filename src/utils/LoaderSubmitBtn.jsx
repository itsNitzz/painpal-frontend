import { Spin } from "antd";
import { Loader } from "react-feather";

const LoaderSubmitBtn = ({ customClass = "" }) => {
  return (
    <div className={`${customClass}`}>
      <Spin indicator={<Loader className={`text-white-primary ${customClass}`} />} />{" "}
      <p className="pl-2">Request processing</p>{" "}
    </div>
  );
};

export default LoaderSubmitBtn;
