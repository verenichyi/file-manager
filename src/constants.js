export const usernameArg = '--username';
export const incorrectArgumentMsg = `Please, run with username argument in format: ${usernameArg}=your_username\n`;
export const executionErrorMsg = 'Operation failed\n';
export const validationErrorMsg = 'Invalid input\n';
export const commandsList = [
    'up',
    'cd',
    'ls',
    'cat',
    'add',
    'rn',
    'cp',
    'mv',
    'rm',
    'os',
    'hash',
    'compress',
    'decompress'
];

export const compressionFlags = {
    compress: 'co',
    decompress: 'deco'
};
export const brotliExtension = '.br';