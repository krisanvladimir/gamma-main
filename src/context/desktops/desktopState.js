import React, {useReducer} from "react";
import {DesktopContext} from './desktopContext'
import {desktopReducer} from "./desktopReducer";
import {ADD_DESKTOP, ADD_NUMBER, CHANGE_DESKTOP, CHANGE_NAME} from "../types";

const getRandomId = max => {
  return new Date().getTime().toString() + Math.floor(Math.random() * Math.floor(max))
}

export const DesktopState = ({children}) => {
  const initialState = {
    desktopState: [
      {
        desktopId:  new Date().getTime().toString(),
        name: 'Мой рабочий стол'
      },
      {
        desktopId: getRandomId(20),
        name: 'Рабочий стол 2'
      }
    ],
    widgetState: [
      {
        objectId: getRandomId(100),
        desktopPosition: new Date().getTime().toString(),
        width: 650,
        height: 380,
        x: 100,
        y: 250
      },
      {
        objectId: getRandomId(100),
        desktopPosition: new Date().getTime().toString(),
        width: 550,
        height: 300,
        x: 1000,
        y: 150
      }
    ],
    currentDesktop: new Date().getTime().toString()
  }
  const [state, dispatch] = useReducer(desktopReducer, initialState)

  const changeDesktop = (id, root) => {
    const widgetState = [...state.widgetState].map(n => {
      if (n.objectId === root) {
        n.desktopPosition = id
      }
      return n
    })

    dispatch({
      ADD_NUMBER,
      widgetState
    })
  }
  const changePosition = (id, position) => {
    const widgetState = [...state.widgetState].map(n => {
      if (n.objectId === id) {
        n.x = position.x
        n.y = position.y
      }
      return n
    })

    dispatch({
      type: ADD_NUMBER,
      widgetState
    })
  }

  const deleteDesktop = id => {
    const desktopState = [...state.desktopState].filter(item => item.desktopId !== id)

    dispatch({
      type: ADD_DESKTOP,
      desktopState
    })
  }

  const changeSize = (id, size, position) => {
    const widgetState = [...state.widgetState].map(n => {
      if (n.objectId === id) {
        n.width = size.width
        n.height = size.height
        n.x = position.x
        n.y = position.y
      }
      return n
    })

    dispatch({
      type: ADD_NUMBER,
      widgetState
    })
  }

  const changeDesktopName = (name, id) => {
    const desktopState = [...state.desktopState].map(node => {
      if (node.desktopId === id){
        node.name = name
      }
      return node
    })
    dispatch({
      type: CHANGE_NAME,
      desktopState
    })
  }

  const addNewDesktop = () => {
    const desktopState = [...state.desktopState, {
      desktopId: getRandomId(20),
      name: 'Новый рабочий стол'
    }]
    dispatch({
      type: ADD_DESKTOP,
      desktopState
    })
  }

  const changeCurrentDesktop = id => {
    dispatch({
      type: CHANGE_DESKTOP,
      id
    })
  }

  return (
    <DesktopContext.Provider
      value={{
        state,
        changeDesktop,
        changePosition,
        changeSize,
        changeDesktopName,
        addNewDesktop,
        changeCurrentDesktop,
        deleteDesktop
      }}>
      {children}
    </DesktopContext.Provider>
  )
}