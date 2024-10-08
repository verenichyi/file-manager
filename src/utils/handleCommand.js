import { getCwdMsg } from './getCwdMsg.js';
import { executionErrorMsg } from '../constants.js';
import { parseCommand } from './parseCommand.js';
import { validateCommand } from './validateCommand.js';
import { cd, up } from '../category/nwd/index.js';
import { ls } from '../category/nwd/ls.js';

export const handleCommand = async (commandInput) => {
    try {
        const [command, args] = parseCommand(commandInput);
        validateCommand(command, args);

        switch (command) {
            case 'up': {
                up();
                break;
            }
            case 'cd': {
                cd(...args);
                break;
            }
            case 'ls': {
                await ls();
                break;
            }
        }
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