import React from "react";
import "./Container.css";

const Container = ({ center, children, scroll = true }) => {
  let classNames = ["Container"];
  if (center) {
    classNames.push("Container--center");
  }

  if (scroll) {
    classNames.push("Container--scroll");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
};
export default Container;
