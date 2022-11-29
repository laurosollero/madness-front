import React, { CSSProperties } from "react"
import ScoreComponent from "Components/layout/Score"

function HeaderComponent() {
  const styles = {
    header: {
      background: "#eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      borderRadius: "5px 5px 0 0"
    },
    title: {
      padding: "30px"
    }
  }

  return (
    <header style={styles.header as CSSProperties}>
      <h1 className="text text2" style={styles.title as CSSProperties}>
        <span>Double</span> <span>Jargon</span>
      </h1>
      <ScoreComponent />
    </header>
  )
}

export default HeaderComponent
