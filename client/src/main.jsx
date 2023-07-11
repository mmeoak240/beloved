import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./context/categoryInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
);
