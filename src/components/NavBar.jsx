import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-white shadow-sm py-3 fixed-top">
                <Container className="container-custom">
                    <Navbar.Brand href="#" className="d-flex fw-bold fs-4 m-0">
                        <div className="d-flex align-items-center">
                            <img src="/logo.jpg" style={{ width: "2.5em" }} />
                            <p className="m-0">Gennaro Lauri <span style={{ color: '#b1977a' }}>Architetto</span></p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="fw-medium">
                            <Nav.Link href="#filosofia" className="mx-2 text-dark">Filosofia</Nav.Link>
                            <Nav.Link href="#punti" className="mx-2 text-dark">Punti di Forza</Nav.Link>
                            <Nav.Link href="#servizi" className="mx-2 text-dark">Servizi</Nav.Link>
                            <Nav.Link href="#contatti" className="mx-2 text-dark">Contatti</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;