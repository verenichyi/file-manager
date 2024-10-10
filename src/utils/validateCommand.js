import { commandsList, validationErrorMsg } from '../constants.js';

export const validateCommand = (commandInput, args) => {
    if (!commandsList.includes(commandInput)) {
        throw new SyntaxError(validationErrorMsg);
    }

    switch (commandInput) {
        case 'up':
        case 'ls': {
            if (!args.length) {
                return;
            }
            break;
        }
        case 'rm':
        case 'add':
        case 'cat':
        case 'cd':
        case 'os':
        case 'hash': {
            if (args.length === 1) {
                return;
            }
            break;
        }
        case 'rn':
        case 'cp':
        case 'mv':
        case 'compress':
        case 'decompress': {
            if (args.length === 2) {
                return;
            }
            break;
        }
    }

    throw new SyntaxError(validationErrorMsg);
};