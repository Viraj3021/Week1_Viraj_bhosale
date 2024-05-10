"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1. ------Install dependencies (Express for TypeScript)
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
//2.-------Initiate dependency (Instance of Express -- app)
const app = (0, express_1.default)();
const port = 8000; //
//4.-------Add Functionality using Express instance i.e app
app.get('/:datatype', (req, res) => {
    var variable = req.params.datatype;
    console.log(` Hii we are comfort`);
    res.json({
        message: variable,
        source: typeof (variable)
    });
});
app.get('/split/:input', (req, res) => {
    const { input } = req.params;
    const result = (0, logic_1.splitString)(input);
    res.json(result);
});
app.get('/concatenate/:param1/:param2', (req, res) => {
    const { param1, param2 } = req.params;
    const result = (0, logic_1.concatenateStrings)(param1, param2);
    res.json(result);
});
//3.------Listen to the required port using Express instance i.e app
app.listen(port, () => {
    console.log(` Hii we are comfortable and server is listeninssasg at:$(port)`);
});
