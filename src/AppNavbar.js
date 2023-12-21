import React, { useState, useEffect, useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Nav,
  NavbarText,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './App';

function AppNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const { user, logout } = useContext(AuthContext);
  const userRole = user ? user.role : null;

  console.log('User:', user);
  console.log('UserRole:', userRole);

  const toggleNavbar = () => setCollapsed(!collapsed);

  let adminLinks = <></>;
  let ownerLinks = <></>;
  let userLinks = <></>;
  let userLogout = <></>;
  let publicLinks = <></>;

  if (userRole === 'SCHOOL') {
    adminLinks = (
      <>
        <NavItem>
          <NavLink style={{ color: 'white' }} tag={Link} to='/school/projects'>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ color: 'white' }}
            tag={Link}
            to='/participants'
          >
            Participants
          </NavLink>
        </NavItem>
      </>
    );
  }

  if (userRole === 'PRAKTICA') {
    ownerLinks = (
      <>
        <NavItem>
          <NavLink
            style={{ color: 'white' }}
            tag={Link}
            to='/praktica/outgoing'
          >
            Outgoing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ color: 'white' }}
            tag={Link}
            to='/praktica/incoming'
          >
            Incoming
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ color: 'white' }}
            tag={Link}
            to='/praktica/partners'
          >
            Partners
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: 'white' }} tag={Link} to='/praktica/schools'>
            Schools
          </NavLink>
        </NavItem>
      </>
    );
  }

  if (!userRole) {
    publicLinks = (
      <>
        <NavItem>
          <NavLink
            style={{ color: 'white' }}
            id='login'
            tag={Link}
            to='/auth/login'
          >
            Login
          </NavLink>
        </NavItem>
      </>
    );
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
        <NavbarText
          style={{ color: 'white', marginRight: '15px' }}
          className='justify-content-end'
        >
          {userRole}
        </NavbarText>
        <NavItem className='d-flex'>
          <NavLink
            style={{ color: 'white', cursor: 'pointer' }}
            id='logout'
            onClick={() => {
              logout();
            }}
          >
            Logout
          </NavLink>
        </NavItem>
      </>
    );
  }

  return (
    <div>
      <Navbar expand='md' dark color='dark'>
        {/* Envuelve el logo con Link y agrega el estilo en línea */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <NavbarBrand>
            <img
              alt='logo'
              src={require('.//static/images/praktica.png')}
              style={{ height: 'auto', width: 100 }}
            />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggleNavbar} className='ms-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className='me-auto mb-2 mb-lg-0' navbar>
            {userLinks}
            {adminLinks}
            {ownerLinks}
          </Nav>
          <Nav className='ms-auto mb-2 mb-lg-0' navbar>
            {publicLinks}
            {userLogout}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
