import * as React from "react";
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

import Failable from "../types/failure/Failable";

import { HTTPErrorContext } from "../components/contexts/HTTPErrorProvider";

type State<T> = [true, undefined] | [false, T];

const useGet = <T>(
	url: string,
	config?: AxiosRequestConfig,
	transformer?: (data: T) => T
): State<T> => {
	const [state, setState] = React.useState<State<T>>([true, undefined]);

	const [, dispatch] = React.useContext(HTTPErrorContext);

	React.useEffect(() => {
		(async (): Promise<void> => {
			let response: AxiosResponse<Failable<T>>;
			try {
				response = await axios.get<Failable<T>>(url, config);
				if (response.data.failure) {
					dispatch({
						type: response.status,
						payload: {
							statusText: response.data.failure.code,
							message: response.data.failure.message
						}
					});
					return;
				}
				setState([
					false,
					transformer
						? transformer(response.data.value)
						: response.data.value
				]);
			} catch (err) {
				const error = err as AxiosError<Failable<T>>;
				response = error.response as AxiosResponse<Failable<T>>;
				dispatch({
					type: response.status,
					payload: {
						statusText: response.statusText,
						message: response.data.failure
							? response.data.failure.message
							: ""
					}
				});
			}
		})();
	}, [url, config, transformer]);

	return state;
};

export default useGet;
