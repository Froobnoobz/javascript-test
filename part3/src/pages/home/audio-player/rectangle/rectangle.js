import React from "react";
import "./rectangle.scss";

export function Rectangle (props) {
  const styles = {
    width: props.width,
    opacity: props.playbar ? "1" : "0.2"
  };

  return (
    <div className="rectangle" style={styles}></div>
  );
}