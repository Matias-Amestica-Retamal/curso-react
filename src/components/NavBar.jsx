import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"; // Importa el icono de carrito


const NavBar = () => {
  return (
    <>
    
    <div className="container"> 
      <div className="row"> 
        <div className="col my-3">
          <ul className="nav justify-content-center">
            
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">Tienda Tecnology</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#SmartPhones">Telefonos</Nav.Link>
                    <Nav.Link href="#Notebooks">Notebooks</Nav.Link>
                    <Nav.Link href="#Accesories">Accesorios</Nav.Link>
                    <div className='col-12'>
                      <Nav.Link href="#pricing">
                          Carrito
                          <CartWidget cantidad={2}/>
                          </Nav.Link>
                      </div>
                  
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar;