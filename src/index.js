import { homedir } from 'node:os';
import { getUsernameFromArgv, getCwdMsg, closeProcess, handleStdinOnData } from './utils/index.js';

const username = getUsernameFromArgv();
const greetingMsg = `Welcome to the File Manager, ${username}!\n`;
const goodbyeMsg = `Thank you for using File Manager, ${username}, goodbye!\n`;

process.chdir(homedir());
process.stdout.write(greetingMsg);
process.stdout.write(getCwdMsg());

process.stdin.on('data', (data) => handleStdinOnData(data, goodbyeMsg));
process.on('SIGINT', () => closeProcess(goodbyeMsg));