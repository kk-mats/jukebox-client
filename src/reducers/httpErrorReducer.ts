export type HTTPErrorState =
	| {
			code: number;
			statusText: string;
			message: string;
	  }
	| undefined;

export const HTTPErrorStateDefault: HTTPErrorState = undefined;

export type Action =
	| {
			type: number;
			payload: {
				statusText: string;
				message: string;
			};
	  }
	| {
			type: "leave";
	  };

const reducer = (state: HTTPErrorState, action: Action): HTTPErrorState => {
	switch (action.type) {
		case "leave": {
			return undefined;
		}
		default: {
			return {
				code: action.type,
				...action.payload
			};
		}
	}
};

export default reducer;
