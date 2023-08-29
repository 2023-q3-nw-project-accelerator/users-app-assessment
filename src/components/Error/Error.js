import React from "react";
import "./Error.css";

function Error({ error }) {
  return (
    <div className="Error">
      There was an error: {error}
      <br />
      Contact Support Admin
    </div>
  );
}

export default Error;
