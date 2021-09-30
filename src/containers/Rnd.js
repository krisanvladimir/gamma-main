import React, {useContext} from "react";
import { Rnd } from "react-rnd";
import {DesktopContext} from "../context/desktops/desktopContext";

const style = {
    border: "solid 1px #ddd",
    background: "#D6FF79",
};

export const ResDrag = props => {
  const {changePosition, changeSize} = useContext(DesktopContext)


  return(
    <Rnd
      style={style}
      onDragStop={(e, d) => {
        const newPosition = {x: d.x, y: d.y}
        changePosition(props.id, newPosition)
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        const newSize = {width: ref.style.width, height: ref.style.height}
        changeSize(props.id, newSize, position)
      }}
      default={{
        x: props.x,
        y: props.y,
        width: props.width,
        height: props.height
      }}
      bounds=".container"
    >
      {props.children}
    </Rnd>
  )

}