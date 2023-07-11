import {
	MDBCard,
	MDBCardBody,
	MDBCardText,
	MDBCardImage,
	MDBCol,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function CategoryCard({ category }) {
	const { image, title, description, link, id } = category;

	return (
		<MDBCol md="4">
			<MDBCard style={{ width: 350 }}>
				<NavLink to={`/categories/${id}`}>
					<MDBCardImage
						style={{ width: 350, height: 350 }}
						src={image}
						alt="..."
						position="top"
					/>
				</NavLink>
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

export default CategoryCard;
