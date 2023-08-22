import React from "react"
import "./Grid.css"

export default function Grid({ children, className }) {
  const classNames = ["Grid"]
  return <div className={classNames}>{children}</div>
}
