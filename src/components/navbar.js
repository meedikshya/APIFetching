import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import image from "../images/cloud-solid.svg";

export const Navbarr = ( ) => {
    return (
       

  <Navbar style={{"margin-bottom": "60px "}} >
        <Container >
          <Navbar.Brand href="#home" className='logo'>
            <img src={image} alt='image' height="30px" width="40px"  />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="navlink">Home</Link>
            <Link to="/Users" className="navlink">Users</Link>
            <Link to="/Todos" className="navlink">ToDo</Link>
            <Link to="/Comments" className="navlink">Comments</Link>

          </Nav>
        </Container>
      </Navbar>
)};