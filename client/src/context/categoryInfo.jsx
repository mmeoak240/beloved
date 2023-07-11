import axios from "axios";
import { createContext, useState } from "react";

const CategoryInfoContext = createContext();

function Provider({ children }) {
	const [categories, setCategories] = useState([]);
	const [categoryExamples, setCategoryExamples] = useState([]);

	const fetchCategories = async () => {
		const response = await axios.get("http://localhost:3000/categories");

		setCategories(response.data);
	};

	const fetchCategoryExamples = async () => {
		const response = await axios.get("http://localhost:3000/category_infos");

		setCategoryExamples(response.data);
	};

	const createCategoryInfo = async (newInfo) => {
		const res = await fetch("http://localhost:3000/category_infos", {
			method: "POST",
			headers: {
				"Content-Type": "application.json",
			},
			body: JSON.stringify(newInfo),
		});
		const info = await res.json();
		return info;
	};

	const valueToShare = {
		categories,
		categoryExamples,
		fetchCategories,
		fetchCategoryExamples,
		createCategoryInfo,
	};

	return (
		<CategoryInfoContext.Provider value={valueToShare}>
			{children}
		</CategoryInfoContext.Provider>
	);
}

export { Provider };
export default CategoryInfoContext;
