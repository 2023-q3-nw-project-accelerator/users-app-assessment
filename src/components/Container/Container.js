import "./Container.css";

const Container = ({ center, children, loading, error }) => {
  let classNames = ["Container"];
  if (center) {
    classNames.push("Container--center");
  }
  if (loading) {
    classNames.push("Container--loading");
  }
  if (error) {
    classNames.push("Container--error");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
};

export default Container;
