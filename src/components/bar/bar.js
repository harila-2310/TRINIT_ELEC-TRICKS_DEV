import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Droopdown from '../Profile/DropDownprofile';
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
function ColorSchemesExample(props) {

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (

    <>
    
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand className='fs-1 p-4' href="/">Socilink</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className={props.class1} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={props.class2} href="/photag">Photag</Nav.Link>
            <Nav.Link  className={props.class3} href="/Findngo ">Find NGO</Nav.Link>
            <Nav.Link  className={props.class4} href="/track">Tracker</Nav.Link>
          </Nav>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        
          </Box>&nbsp;&nbsp;&nbsp;
        </Container><a href="http://localhost:3001/">
        <ChatIcon  color="primary"/>
        </a>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;