import { useContext } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import Header from "../components/Header";
import Nav from "../components/Nav";

import CategoryCard from "../components/CategoryCard";
import CategoryInfoContext from "../context/categoryInfo";

function CategoriesPage() {
	const { categories } = useContext(CategoryInfoContext);

	const renderedCategories = categories.map((category) => (
		<CategoryCard key={category.id} category={category} />
	));
	return (
		<>
			<Header />
			<Nav />
			<MDBRow className="gy-5">{renderedCategories}</MDBRow>
		</>
	);
}

export default CategoriesPage;

// useEffect(() => {
// 	fetch("http://localhost:3000/categories").then((res) => {
// 		if (res.ok) {
// 			res.json().then((data) => {
// 				setCategories(data);
// 			});
// 		}
// 	});
// }, []);
