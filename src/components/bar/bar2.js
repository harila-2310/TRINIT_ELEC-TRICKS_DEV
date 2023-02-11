import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='fs-2 p-4' href="/">Home</Nav.Link>

            <Nav.Link className='fs-2 p-4' href="/photag">Photag</Nav.Link>

            <Nav.Link className='fs-2 p-4' href="/findngo">FindNGO</Nav.Link>

            <Nav.Link className='fs-2 p-4' href="/track">Tracking</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='fs-3'href="/"><AccountCircleIcon style={{width:"50px"}}/>Profile</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className='fs-3'  href="localhost:3001">
              <TelegramIcon style={{width:"50px"}}/>Chats
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;