export type Status = "Succeeded" | "Failed" | "Pending" | "Running";

export type Type = {
	created: Date;
	dispatched: Date;
	finished: Date;
	detector: {
		name: string;
		slug: string;
		version: string;
	};
	query: {
		target: string;
		parameters: string;
	};
	status: Status;
	artifacts: string[];
};

export default Type;
