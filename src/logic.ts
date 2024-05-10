// logic.ts

export function splitString(input: string): { revisedString: string } {
    const revisedString = input.replace('_', ' ');
    return { revisedString };
}

export function concatenateStrings(param1: string, param2: string): { revisedString: string } {
    const revisedString = param1 + param2;
    return { revisedString };
}
//npm run build npm run start 