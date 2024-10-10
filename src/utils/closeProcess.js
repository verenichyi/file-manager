export const closeProcess = (message) => {
    process.stdout.write(message, () => {
        process.exit(0);
    });
};