import { incorrectArgumentMsg, usernameArg } from './constants.js';

export const getCwdMsg = () => `You are currently in ${process.cwd()}\n`;

export const closeProcess = (message) => {
    process.stdout.write(message);
    process.exit();
};

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