import { getCwdMsg } from './getCwdMsg.js';
import { executionErrorMsg } from '../constants.js';
import { parseCommand } from './parseCommand.js';
import { validateCommand } from './validateCommand.js';
import { cd, up, ls } from '../category/nwd/index.js';
import { add, cat, move, rn } from '../category/files/index.js';

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
            case 'cat': {
                await cat(...args);
                break;
            }
            case 'add': {
                await add(...args);
                break;
            }
            case 'rn': {
                await rn(...args);
                break;
            }
            case 'cp': {
                await move(...args, true);
                break;
            }
            case 'mv': {
                await move(...args);
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