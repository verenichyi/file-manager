import { getCwdMsg } from './getCwdMsg.js';
import { compressionFlags, executionErrorMsg } from '../constants.js';
import { parseCommand } from './parseCommand.js';
import { validateCommand } from './validateCommand.js';
import { cd, up, ls } from '../category/nwd/index.js';
import { add, cat, move, rm, rn } from '../category/files/index.js';
import { handleOs } from '../category/os/index.js';
import { calcHash } from '../category/hash/index.js';
import { handleCompression } from '../category/compression/index.js';

const { decompress } = compressionFlags;

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
            case 'rm': {
                await rm(...args);
                break;
            }
            case 'os': {
                await handleOs(...args);
                break;
            }
            case 'hash': {
                await calcHash(...args);
                break;
            }
            case 'compress': {
                await handleCompression(...args);
                break;
            }
            case 'decompress': {
                await handleCompression(...args, decompress);
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