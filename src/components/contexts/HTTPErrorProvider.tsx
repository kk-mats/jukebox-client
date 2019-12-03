import * as React from "react";

import reducer, {
	Action,
	HTTPErrorState,
	HTTPErrorStateDefault
} from "../../reducers/httpErrorReducer";

export const HTTPErrorContext = React.createContext<
	[HTTPErrorState, React.Dispatch<Action>]
>([HTTPErrorStateDefault, (): void => {}]);

type Props = {
	children: React.ReactNode;
};

const HTTPErrorProvider: React.FunctionComponent<Props> = (props: Props) => {
	const { children } = props;
	const value = React.useReducer(reducer, HTTPErrorStateDefault);

	return (
		<HTTPErrorContext.Provider value={value}>
			{children}
		</HTTPErrorContext.Provider>
	);
};

export default HTTPErrorProvider;
