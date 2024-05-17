import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {AuthContext} from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../styles/Header.css'
import {useAuthentication} from "../hooks/authentication/useAuthentication";
import {useNavigate} from "react-router-dom";
import {SearchBar} from "./SearchBar";

export const Header = () => {

    const {theme, setTheme} = useContext(ThemeContext)
    const {authToken} = useContext(AuthContext)
    const navigate = useNavigate()
    const {logOut} = useAuthentication()


    return (
        <div className={'header--' + theme}>
            <Navbar expand="md" variant={theme} className={"navbar--"+theme} >
                <Container>
                    <Navbar.Brand className={'navbar__brand--'+theme}>The Movie Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className={'navbar__toggle--'+theme}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {authToken!=null ?
                            <Nav className="me-auto">
                                <Nav.Item className={'navbar__item--'+theme}>
                                    <Nav.Link onClick={()=>navigate('/home')}>Inicio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={'navbar__item--'+theme}>
                                    <Nav.Link onClick={()=>navigate('/categories')}>Categorías</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={'navbar__item--'+theme+ ' navbar__item--user'}>
                                    <Nav.Link onClick={()=>navigate('/user')}>Mi cuenta</Nav.Link>
                                </Nav.Item>
                            </Nav> : ''
                        }
                        <Nav className="justify-content-end" style={{width: "100%"}}>
                            {authToken != null ?
                                <div className="navbar__search">
                                    <SearchBar></SearchBar>
                                </div> : ''
                            }
                            {authToken != null ?
                                <Nav.Item className={'navbar__item--' + theme}>
                                    <Nav.Link onClick={() => logOut()}>Log out</Nav.Link>
                                </Nav.Item> : ''
                            }
                            <Nav.Item className={'navbar__item--' + theme}>
                                <Form.Check
                                    className={'navbar__switch--' + theme}
                                    type="switch"
                                    id="custom-switch"
                                    label="Dark Mode"
                                    checked={theme==='dark'}
                                    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                />
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}