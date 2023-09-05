import React from "react"
import "./Error.css"
export default function Error({ error }) {
  return (
    <div className="Error">
      There was an Error:{error}
      <br />
      Please refresh your page or contact support service for help.
    </div>
  )
}
