import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StrictMode>
			<App />
		</StrictMode>
		,
	</BrowserRouter>,
);
