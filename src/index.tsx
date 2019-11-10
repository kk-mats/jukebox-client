import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Version from "./components/pages/Version";

const Jukebox: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Route path="/version">
				<Version />
			</Route>
		</BrowserRouter>
	);
};

ReactDOM.render(<Jukebox />, document.getElementById("root"));
