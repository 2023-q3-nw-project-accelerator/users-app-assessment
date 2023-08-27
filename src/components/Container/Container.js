import "./Container.css";
const Container = ({ center, children }) => {
  const className = center ? "Container Container--center" : "Container";
  return <div className={className}>{children}</div>;
};

export default Container;
