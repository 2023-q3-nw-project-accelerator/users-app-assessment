import React from "react"

export default function NoContent({ input }) {
  return (
    <div className="no-content">
      <p>`No results found for {input}`</p>
    </div>
  )
}
