import { closeProcess, handleCommand } from './index.js';

export const handleStdinOnData = async (chunk, message) => {
    const command = chunk.toString().trim();
    if (command.includes('.exit')) {
        closeProcess(message);
    }

    await handleCommand(command);
};