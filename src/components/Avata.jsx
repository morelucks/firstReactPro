import React from "react";

export default function avata(props) {
  return (
    <div>
      <img
        src={props.img}
        style={{ width: "100px", height: "100px ", objectFit: "cover" }}
      />
    </div>
  );
}
