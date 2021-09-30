import React, {useContext, useEffect, useState} from "react";
import {ReactSortable} from "react-sortablejs";
import {DesktopContext} from "../context/desktops/desktopContext";
import Icon from "@material-ui/core/Icon";

export const DesktopMenu = () => {
  const {state, changeCurrentDesktop, addNewDesktop, deleteDesktop, changeDesktopName} = useContext(DesktopContext)

  const [list, setList] = useState(state.desktopState);
  const [isDoubleClick, setClick] = useState(true)
  const [input, changeInput] = useState('')

  const {currentDesktop} = state


  const onClickHandler = event => {
    if (!isDoubleClick) {
      setClick(!isDoubleClick)
    }
    const id = event.target.getAttribute('data-id')
    changeCurrentDesktop(id)
  }

  const onCloseHandler = id => {
    const doIt = window.confirm("Вы точно хотите закрыть рабочий стол?")
    if (doIt) {
      deleteDesktop(id)
    }
  }

  const onPressHandler = event => {
    if (event.key === 'Enter') {
      changeDesktopName(input, currentDesktop)
      event.target.value = ''
      if (!isDoubleClick) {
        setClick(!isDoubleClick)
      }
    }
  }



  useEffect(() => {
    setList(state.desktopState)
  }, [state.desktopState])

  return (
    <div className="navbar-nav">
      <ReactSortable list={list} setList={setList} className="navbar-nav">
        {list.map(item => {
          if (item.desktopId === currentDesktop) {
            if (!isDoubleClick) {
              return (
                <input key={item.desktopId} type="text"
                       onChange={event => changeInput(event.target.value)}
                       onKeyPress={onPressHandler}
                />
              )
            } else {
              return (
                <div className='nav-items' key={item.desktopId}>
                  <span
                    className="nav-item"
                    data-id={item.desktopId}
                    onDoubleClick={event => setClick(!isDoubleClick)}
                  >
                    {item.name}
                  </span>
                  <Icon className='icon close' onClick={e => onCloseHandler(item.desktopId)}>highlight_off</Icon>
                </div>
              )
            }
          } else {
            return (
              <div className='nav-items' key={item.desktopId}>
                  <span
                    className="nav-item"
                    data-id={item.desktopId}
                    onClick={e => onClickHandler(e)}
                  >
                    {item.name}
                  </span>
                <Icon className='icon close' onClick={e => onCloseHandler(item.desktopId)}>highlight_off</Icon>
              </div>
            )
          }
        })
        }
      </ReactSortable>
      <Icon className='icon' onClick={addNewDesktop}>add_circle</Icon>
    </div>
  )
}