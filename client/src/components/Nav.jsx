import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
	MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
	const [showNav, setShowNav] = useState(false);

	return (
		<MDBNavbar expand="lg" light bgColor="light">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">Beloved</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNav(!showNav)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNav}>
					<MDBNavbarNav>
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="#">
								Home
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="#">
								Contact us
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<NavLink to="/category_info/new">
								<MDBNavbarLink active aria-current="page" href="#">
									Add Examples
								</MDBNavbarLink>
							</NavLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
