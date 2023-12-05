import React, { useState, useEffect, useContext } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Nav, NavbarText, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import tokenService from './services/token.service';
import jwt_decode from "jwt-decode";
import { AuthContext } from './App';

function AppNavbar() {
    const [username, setUsername] = useState("");
    const [collapsed, setCollapsed] = useState(true);

    const { user } = useContext(AuthContext);
    const userRole = user ? user.role : null;

    console.log('User:', user);
    console.log('UserRole:', userRole);

    const toggleNavbar = () => setCollapsed(!collapsed);

    let adminLinks = <></>;
    let ownerLinks = <></>;
    let userLinks = <></>;
    let userLogout = <></>;
    let publicLinks = <></>;

    if (userRole === "SCHOOL") {
        adminLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/owners">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/pets">Participants</NavLink>
                </NavItem>
            </>
        )
    }

    if (userRole === "PRAKTICA") {
        ownerLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white"  }} tag={Link} to="/myPets">Outgoing</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/clinics">Incoming</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/owners">Partners</NavLink>
                </NavItem>
            </>
        )
    }

    if (!userRole) {
        publicLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="login" tag={Link} to="/auth/login">Login</NavLink>
                </NavItem>
            </>
        )
    } else {
        //Common left links
        /*
        userLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/dashboard">Dashboard</NavLink>
                </NavItem>  
            </>
        ) */
        //Common Right links
        userLogout = (
            <>
                <NavbarText style={{ color: "white", marginRight: "15px" }} className="justify-content-end">{userRole}</NavbarText>
                <NavItem className="d-flex">
                    <NavLink
                        style={{ color: "white", cursor: "pointer" }}
                        id="logout"
                        onClick={() => {
                            // Limpia la información del usuario del almacenamiento local
                            localStorage.removeItem('user');

                            // Redirige a la página de login y fuerza un recargo de la página
                            window.location.href = '/auth/login';
                        }}
                    >
                        Logout
                    </NavLink>
                </NavItem>
            </>
        )

    }

    return (
        <div>
            <Navbar expand="md" dark color="dark">
                {/* Envuelve el logo con Link y agrega el estilo en línea */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <NavbarBrand>
                    <img alt="logo" src={require(".//static/images/praktica.png")} style={{ height: 'auto', width: 100 }} />
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggleNavbar} className="ms-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto mb-2 mb-lg-0" navbar>
                        {userLinks}
                        {adminLinks}
                        {ownerLinks}
                    </Nav>
                    <Nav className="ms-auto mb-2 mb-lg-0" navbar>
                        {publicLinks}
                        {userLogout}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;