import * as React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "./contexts/AuthProvider";
import Failable from "../types/failure/Failable";

type Props = {
	children: React.ReactNode;
};

const Private: React.FunctionComponent<Props> = (props: Props) => {
	const { children } = props;

	const [loading, setLoading] = React.useState(true);
	const [authState, dispatch] = React.useContext(AuthContext);

	React.useEffect(() => {
		if (authState.uid) {
			return;
		}

		(async (): Promise<void> => {
			const { data } = await axios.get<Failable<string | undefined>>(
				"/api/loginAs"
			);
			if (data.failure || !data.value) {
				setLoading(false);
			} else {
				dispatch({ type: "login", payload: { uid: data.value } });
			}
		})();
	}, [authState.uid]);

	const node = loading ? <></> : <Redirect to="/login" />;

	return authState.uid ? <>{children}</> : node;
};

export default Private;
