"use strict";
// logic.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenateStrings = exports.splitString = void 0;
function splitString(input) {
    const revisedString = input.replace('_', ' ');
    return { revisedString };
}
exports.splitString = splitString;
function concatenateStrings(param1, param2) {
    const revisedString = param1 + param2;
    return { revisedString };
}
exports.concatenateStrings = concatenateStrings;
