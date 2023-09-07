import { HashLoader } from "react-spinners";
import "./Loading.css";
function Loading() {
  return (
    <div className="loader">
      <HashLoader color="#333" />
    </div>
  );
}
export default Loading;
