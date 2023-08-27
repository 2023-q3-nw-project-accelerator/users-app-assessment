import "./Error.css";
function Error({ error }) {
  return (
    <div className="error">
      <h3>Error: {error}</h3>
    </div>
  );
}
export default Error;
