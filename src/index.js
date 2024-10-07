import { homedir } from 'node:os';
import { getUsernameFromArgv, getCwdMsg, closeProcess } from './utils.js';

const username = getUsernameFromArgv();
const greetingMsg = `Welcome to the File Manager, ${username}!\n`;
const goodbyeMsg = `Thank you for using File Manager, ${username}, goodbye!`;

process.chdir(homedir());
process.stdout.write(greetingMsg);
process.stdout.write(getCwdMsg());

process.stdin.on('data', (data) => {
    if(data.toString().trim() === '.exit'){
        closeProcess(goodbyeMsg);
    } else {
        console.log(data.toString());
    }
})
process.on('SIGINT', () => closeProcess(goodbyeMsg));