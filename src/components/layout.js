import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, padding: `1rem` }}>
      {children}
    </div>
  )
}