import * as React from "react";
import axios from "axios";

const Version: React.FunctionComponent = () => {
	const [version, setVersion] = React.useState("");

	React.useEffect(() => {
		(async (): Promise<void> => {
			const { data } = await axios.get("/api/version");
			setVersion(data.version);
		})();
	}, []);

	return <div>{version ? `Jukebox ${version}` : "Loading"}</div>;
};

export default Version;
