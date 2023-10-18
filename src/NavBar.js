import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

    return (
      <Navbar expand="lg" bg="dark" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/nav">DIN MAMMAS COCKTAILBAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/nav/search">Search</Nav.Link>
            <Nav.Link href="/nav/list">Look up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

  

}
export default NavBar;