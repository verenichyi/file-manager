import { getCwdMsg } from './getCwdMsg.js';
import { executionErrorMsg } from '../constants.js';
import { parseCommand } from './parseCommand.js';
import { validateCommand } from './validateCommand.js';

export const handleCommand = async (commandInput) => {
    try {
        const [command, args] = parseCommand(commandInput);
        validateCommand(command, args);

        console.log(command, args)
    } catch (error) {
        if (error instanceof SyntaxError) {
            process.stdout.write(error.message);
        } else {
            process.stdout.write(executionErrorMsg);
        }
    } finally {
        process.stdout.write(getCwdMsg());
    }
};