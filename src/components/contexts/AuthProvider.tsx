import * as React from "react";

import reducer, {
	Action,
	AuthState,
	AuthStateDefault
} from "../../reducers/authReducer";

export const AuthContext = React.createContext<
	[AuthState, React.Dispatch<Action>]
>([AuthStateDefault, (): void => {}]);

type Props = {
	children: React.ReactNode;
};

const AuthProvider: React.FunctionComponent<Props> = (props: Props) => {
	const { children } = props;
	const value = React.useReducer(reducer, AuthStateDefault);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
