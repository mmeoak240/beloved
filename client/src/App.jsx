import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useContext } from "react";
import CategoryInfoContext from "./context/categoryInfo";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import NewFormPage from "./pages/NewCategoryInfoPage";

function App() {
	const { fetchCategories, fetchCategoryExamples } =
		useContext(CategoryInfoContext);

	useEffect(() => {
		fetchCategories();
		fetchCategoryExamples();
	}, []);

	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<CategoriesPage />} />
					<Route path="/categories/:category_id" element={<CategoryPage />} />
					<Route path="/category_info/new" element={<NewFormPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
