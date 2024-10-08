import { getCwdMsg } from './getCwdMsg.js';
import { executionErrorMsg } from '../constants.js';


export const handleCommand = async (command) => {
    try {
        console.log(command)
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