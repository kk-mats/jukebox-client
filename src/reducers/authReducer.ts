export type AuthState = {
	uid?: string;
};

export const AuthStateDefault: AuthState = {
	uid: undefined
};

export type Action =
	| {
			type: "login";
			payload: {
				uid: string;
			};
	  }
	| {
			type: "logout";
	  };

const reducer = (state: AuthState, action: Action): AuthState => {
	switch (action.type) {
		case "login": {
			return { ...state, uid: action.payload.uid };
		}

		case "logout": {
			return { ...state, uid: undefined };
		}

		default: {
			return state;
		}
	}
};

export default reducer;
