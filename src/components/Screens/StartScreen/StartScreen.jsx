import React from "react";
import Angel from "../../../assets/Angel-dark.png";

export default function StartScreen() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Angel})`
  }
  return (
    <div className="start-screen" style={styles}>
      <h1 className="start-text" style={{margin: 0}}>PRESS START</h1>
    </div>
  );
}
