import { useState, useContext } from "react";
import CategoryInfoContext from "../context/categoryInfo";

function NewCategoryInfo() {
	const { createCategoryInfo } = useContext(CategoryInfoContext);

	const [title, setTitle] = useState("");
	const [before, setBefore] = useState("");
	const [after, setAfter] = useState("");
	const [description, setDescription] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		const newInfo = {
			title,
			before,
			after,
			description,
		};
		createCategoryInfo(newInfo);

		setTitle("");
		setBefore("");
		setAfter("");
		setDescription("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				type="text"
				id="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Title"
			></input>

			<label>Before</label>
			<input
				type="text"
				id="before"
				value={before}
				onChange={(e) => setBefore(e.target.value)}
				placeholder="Before"
			></input>

			<label>After</label>
			<input
				type="text"
				id="after"
				value={after}
				onChange={(e) => setAfter(e.target.value)}
				placeholder="After"
			></input>
			<br></br>
			<label>Description</label>
			<br></br>
			<textarea
				maxlength="500"
				type="text"
				id="description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				style={{ width: "500px", height: "200px", fontSize: 20 }}
				placeholder="Description"
			></textarea>
			<button type="submit">Submit</button>
		</form>
	);
}

export default NewCategoryInfo;
