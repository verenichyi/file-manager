const splitByPairedQuotes = (str) => str.split(/["'] | ["']/);
const removeItemUnnecessaryQuotes = (arr) => arr.map((arg) => arg.replace(/["']/g, ''));

export const parseCommand = (commandInput) => {
	const [ command, ...args ] = commandInput.split(' ');
	const isArgsContainQuotes = (/["']/g).test(args);

	if (isArgsContainQuotes) {
		const srcArgsString = args.join(' ');
		const splittedLine = splitByPairedQuotes(srcArgsString);
		const parsedArgs = removeItemUnnecessaryQuotes(splittedLine);

		return [ command, parsedArgs ];
	}

	return [ command, args ];
};