import { React } from "react";
import { BoxLoading } from "react-loadingg";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="Loading">
      <BoxLoading />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
