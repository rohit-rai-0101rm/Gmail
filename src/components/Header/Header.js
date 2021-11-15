import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@material-ui/core';
const Header = () => {
    return (
        <div className="header">
              <div className="header__left">
              <IconButton>
                  <MenuIcon/>
              </IconButton>
              </div>
              <div className="header__middle">
              </div>       
              <div className="header__right">
              </div> 
        </div>
    )
}

export default Header
