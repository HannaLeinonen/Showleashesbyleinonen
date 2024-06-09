import { Link, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import PriceList from '../../pages/PriceList'
import './NavBar.css'

import { useState } from 'react'

function NavBar() {
    const [expanded, setExpanded] = useState(false)

    const toggleNavbar = () => {
        setExpanded(!expanded)
    }

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                expanded={expanded}
            >
                <Container>
                    <Navbar.Brand id="brandName">
                        <Link className="navbar-link" to="/">
                            Showleashes by Leinonen
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={toggleNavbar}
                        aria-controls="responsive-navbar-nav"
                        className="custom-toggler"
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="navbar-link" to="/">
                                Hem
                            </Link>
                            <Link className="navbar-link" to="/about">
                                Om oss
                            </Link>
                            <Link className="navbar-link" to="/contact">
                                Kontakt
                            </Link>
                            <Link className="navbar-link" to="/pricelist">
                                Priser
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricelist" element={<PriceList />} />
            </Routes>
        </div>
    )
}

export default NavBar
