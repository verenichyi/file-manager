import { incorrectArgumentMsg, usernameArg } from '../constants.js';
import { closeProcess } from './closeProcess.js';

export const getUsernameFromArgv = () => {
    const args = process.argv.slice(2);
    if (!args.length || args.length > 1 || !args[0].includes(usernameArg)) {
        closeProcess(incorrectArgumentMsg);
    }

    const [, value] = args[0].split('=');
    if (!value) {
        closeProcess(incorrectArgumentMsg);
    }

    return value;
};