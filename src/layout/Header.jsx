import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu'; 
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem'; 
import AdbIcon from '@mui/icons-material/Adb'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Outlet, Link } from "react-router-dom";
import style from "./styles";

import MenusList from './menuList'; 

function Header() {

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const handleMenuClick = (index, event) => { setMenuAnchorEl({[index] : event.currentTarget});  };
  const handleMenuClose = () => { setMenuAnchorEl(null);   };
  const leaveMenu = (e) => {
    setTimeout(() => {
      setMenuAnchorEl(null);
    }, 0);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget);  };
  const handleClose = () => { setAnchorEl(null);   };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={style.headerToolbar}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={style.HeaderLogo}
          >
            SkyWebLab
          </Typography>

          <Box sx={style.HeaderMenuBox}>
            { MenusList.map((menu, index) =>(
              <div key={ 'menu-div-'+index }
              
              onMouseLeave={leaveMenu}
              style={{ display: 'block' }}
              >
                <Button  
                    id={ 'menu-div-'+index }
                    aria-owns={Boolean(menuAnchorEl && menuAnchorEl[index]) ? 'menu-'+index : undefined}
                    aria-controls={ Boolean(menuAnchorEl && menuAnchorEl[index]) ? 'menu-'+index : undefined}
                    aria-expanded={ Boolean(menuAnchorEl && menuAnchorEl[index]) ? 'true' : undefined}
                    aria-haspopup="true"
                    onMouseOver={(e) => handleMenuClick(index, e)}
                    
                    sx={style.HeaderMenuButton}
                  >
                    { menu && menu.subMenu > 0 ? menu.name :
                      ( 
                        <Link to={menu.path} style={{ textDecoration:'none', color : 'inherit' }}>
                              { menu.name }
                        </Link>
                      )
                    }
                    
                </Button>

                { menu && menu.subMenu  &&
                  
                  <Menu
                  anchorEl={menuAnchorEl && menuAnchorEl[index]}
                  id={ 'menu-'+index }
                  open={ Boolean(menuAnchorEl && menuAnchorEl[index]) }
                  onClose={handleMenuClose} 
                  MenuListProps={{
                    'aria-labelledby':  'menu-'+index ,
                    onMouseLeave: leaveMenu,
                  }}
                 
                  PaperProps={{
                    elevation: 0,
                    sx: style.HeaderSubMenu,
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {
                    menu?.subMenu.map((subMenu, index2)=>(
                      <MenuItem onClick={handleMenuClose} key={ 'sub-menu-'+index+'-'+index2 } >
                        <Link to={subMenu.path} style={{ textDecoration:'none', color : 'inherit' }}>
                          {subMenu.name}
                        </Link>
                      </MenuItem> 
                    ))
                  }
                
                  </Menu>
                    
                }
              </div>
              ))}

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 1 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: style.HeaderSubMenu,
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem> 
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
          </Box>
       
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;