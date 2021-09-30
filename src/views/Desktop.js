import React, {useContext, useState} from "react";
import {DesktopContext} from "../context/desktops/desktopContext";
import {ResDrag} from "../containers/Rnd";
import {ChangeMenu} from "../components/ChangeMenu";


export const Desktop = () => {
  const {state, changeDesktop} = useContext(DesktopContext)
  const [click, setClick] = useState(true)

  const {widgetState, currentDesktop} = state

  const onSwapHandler = (desktopId, widgetId) => {
    changeDesktop(desktopId, widgetId)
    setClick(!click)
  }

  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {widgetState.map((node) => {
        if (node.desktopPosition === currentDesktop) {
          return (
            <ResDrag width={node.width} height={node.height} x={node.x} y={node.y} id={node.objectId} key={node.objectId}>
              <ChangeMenu id={node.objectId} onSwapHandler={onSwapHandler}/>
            </ResDrag>
          )
        }
      })}
    </>
  )
}