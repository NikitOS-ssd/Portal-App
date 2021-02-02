import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import AuthModal from '../AuthModal/AuthModal'
import logo from '../logo192.png'
import './style.css'


class Header extends Component {
	state = {}

	render() {
		let { userAuth } = this.props;
		console.log(userAuth);

		if (userAuth) {
			var userInfo = JSON.parse(localStorage.getItem('user'));
			let kkk = userInfo.email;
			let z = kkk.indexOf('@') - kkk.length + 1;
			var email = kkk.slice(0, z);
		}

		return (
			<>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
					<Container>
						{/* MENU  */}
						<NavLink to="/">
							<Navbar.Brand>
								<img
									src={logo}
									height="30"
									width="30"
									className="d-inline-block align-top"
									alt="Logo"
								/> React Site
						</Navbar.Brand>
						</NavLink>


						{/* MENU MOBILE */}
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								{/* <NavLink to="/" className="header__navlink"> Home </NavLink> */}
								<NavLink to="/about" className="header__navlink"> About us </NavLink>
								<NavLink to="/contacts" className="header__navlink"> Contacts </NavLink>
								<NavLink to="/blog" className="header__navlink">  Blog </NavLink>
								{userAuth ? <NavLink to="/tasks" className="header__navlink">  Tasks </NavLink> : null}
							</Nav>

							{
								userAuth
									? <AccountDropdownButton email={email} />
									: <AuthModal />
							}


						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		)
	}
}

function AccountDropdownButton({email}) {
	return (
		<DropdownButton id="dropdown-basic-button" title="My account">
			<p id="account_name" onClick={meFunc}>{email}</p>
			<Dropdown.Item onClick={aboutMeFunc}>Abbout me</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item onClick={exitMe}>Exit</Dropdown.Item>
		</DropdownButton>
	)
}

function meFunc() {
	window.location = window.location.origin;
}

function aboutMeFunc() {
	let user = JSON.parse(localStorage.getItem('user'));
	console.log(localStorage)

	console.log(user);
}

function exitMe() {
	let quest = window.confirm('Do you want to log out of this account?');
	
	if(quest) {
		localStorage.clear();
		window.location = window.location.origin;
	} else {
		return
	}
}

export default Header