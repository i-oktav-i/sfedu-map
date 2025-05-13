export const objectKeys = Object.keys as <T extends object>(obj: T) => (keyof T)[];
