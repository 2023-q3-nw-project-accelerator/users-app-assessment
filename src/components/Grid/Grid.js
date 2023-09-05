import React from "react"
import "./Grid.css"

export default function Grid({ children, center }) {
  let classNames = ["Grid"]

  if (center) {
    classNames.push("Grid--center")
  }
  return <div className={classNames.join(" ")}>{children}</div>
}
