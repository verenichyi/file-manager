import { join } from 'node:path';

export const up = () => {
    process.chdir(join(process.cwd(), '..'));
};