import SelectVariant from "../types/SelectVariant";

export type DetectorInfo = {
	readonly label: string;
	readonly versions: string[];
	readonly description: string;
	readonly languages?: SelectVariant[];
};

export type Type = {
	readonly ccfx: DetectorInfo;
	readonly ccvolti: DetectorInfo;
	readonly ccfsw: DetectorInfo;
};

export const value: Type = {
	ccfx: {
		label: "CCFinderX",
		versions: ["10.2.7.4"],
		description: "Type-1, 2",
		languages: [
			{
				label: "Cobol",
				value: "cobol"
			},
			{
				label: "C/C++",
				value: "cpp"
			},
			{
				label: "C#",
				value: "csharp"
			},
			{
				label: "Java",
				value: "java"
			},
			{
				label: "Visual Basic",
				value: "visualbasic"
			},
			{
				label: "Plain Text",
				value: "plaintext"
			}
		]
	},
	ccvolti: {
		label: "CCVolti",
		versions: ["1.0"],
		description: "Type-1,2,3,4",
		languages: [
			{
				label: "Java",
				value: "java"
			},
			{
				label: "C",
				value: "c"
			},
			{
				label: "C#",
				value: "csharp"
			}
		]
	},
	ccfsw: {
		label: "CCFinderSW",
		versions: ["1.0"],
		description: "Type-1, 2",
		languages: [
			{
				label: "Java",
				value: "java"
			},
			{
				label: "C",
				value: "c"
			},
			{
				label: "C#",
				value: "csharp"
			}
		]
	}
};

export const defaultDetector = Object.entries(value)[0];

export default value;
