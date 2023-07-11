import {
	MDBCard,
	MDBCardBody,
	MDBCardText,
	MDBCardImage,
	MDBCol,
} from "mdb-react-ui-kit";

function CategoryExampleCard({ example }) {
	const { title, description, before, after } = example;
	console.log(example);

	return (
		<MDBCol md="4">
			<MDBCard style={{ width: 350 }}>
				<MDBCardImage
					style={{ width: 350, height: 350 }}
					src={before}
					alt="..."
					position="top"
				/>
				<MDBCardImage
					style={{ width: 350, height: 350 }}
					src={after}
					alt="..."
					position="top"
				/>

				<MDBCardBody>
					<MDBCardText>
						<h4>{title}</h4>
					</MDBCardText>
					<MDBCardText>{description}</MDBCardText>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
}

export default CategoryExampleCard;
