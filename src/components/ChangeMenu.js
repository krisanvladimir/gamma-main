import React, {useContext, useState} from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {DesktopContext} from "../context/desktops/desktopContext";

export const ChangeMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const {state} = useContext(DesktopContext)

  const {desktopState} = state

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="rnd-menu">
      <div className="menu-changer">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Icon className='changer'>swap_horiz</Icon>
        </Button>
        <Menu
          id='simple'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            desktopState.map(el => {
              return (
                <MenuItem
                  key={el.desktopId}
                  data-id={el.desktopId}
                  onClick={e => {props.onSwapHandler(el.desktopId, props.id)
                    handleClose()
                  }}
                >
                  {el.name}
                </MenuItem>
              )
            })
          }
        </Menu>
      </div>
    </div>
  )
}