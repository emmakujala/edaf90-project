import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

    return (
    <Navbar expand="lg" bg="dark" className="bg-body-tertiary mx-auto text-center" data-bs-theme="dark" style={{ maxWidth: '1000px' }}>      <Container>
      <Navbar.Brand href="/">KAREN'S COCKTAIL BAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/list">Browse</Nav.Link>
            <Nav.Link href="/spirits">Spirits</Nav.Link>
            <Nav.Link href="/random">Random cocktail</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

  

}
export default NavBar;