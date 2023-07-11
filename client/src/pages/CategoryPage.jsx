import { useParams } from "react-router-dom";
import { useContext } from "react";
import CategoryInfoContext from "../context/categoryInfo";
import CategoryExampleCard from "../components/CategoryExampleCard";
import { MDBRow } from "mdb-react-ui-kit";

function CategoryPage() {
	const { categoryExamples } = useContext(CategoryInfoContext);

	const params = useParams();
	const categoryId = params.category_id;

	const selectedExamples = categoryExamples.filter((example) => {
		example.id == categoryId;
	});

	const renderedExamples = selectedExamples.map((example) => (
		<CategoryExampleCard example={example} />
	));

	return (
		<div>
			<h2>Category Page!</h2>
			<MDBRow className="gy-5">{renderedExamples}</MDBRow>
		</div>
	);
}

export default CategoryPage;
