import React from "react";
import "./rectangle.scss";

export function Rectangle (props) {
  const styles = {
    width: props.width,
    // Opacity is set to render two modes, play progress and total remaining
    opacity: props.playbar ? "1" : "0.2"
  };

  return (
    <div className="rectangle" style={styles}></div>
  );
}