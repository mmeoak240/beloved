import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function App() {
	// const [showBasic, setShowBasic] = useState(false);

	return (
		<header>
			<div
				className="p-5 text-center bg-image"
				style={{
					backgroundImage:
						"url('https://cdn.houseplansservices.com/content/kd9d07vf2541auab152shuqveb/w991x660.jpg?v=2')",
					height: "400px",
				}}
			>
				<div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
					<div className="d-flex justify-content-center align-items-center h-100">
						<div className="text-white">
							<h1 className="mb-3">Beloved</h1>
							<h4 className="mb-3">Home is where the heart is</h4>
							<MDBBtn tag="a" outline size="lg">
								Call to action
							</MDBBtn>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
