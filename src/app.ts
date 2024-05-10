//1. ------Install dependencies (Express for TypeScript)
import express, {Request , Response} from 'express';
import { splitString, concatenateStrings } from './logic';
//2.-------Initiate dependency (Instance of Express -- app)
const app = express();
const port = 8000; //

//4.-------Add Functionality using Express instance i.e app
app.get('/:datatype',(req: Request,res: Response)=>{
var variable: any = req.params.datatype;
res.json({
message: variable,
source : typeof(variable)
})
})

app.get('/split/:input', (req: Request, res: Response) => {
    const { input } = req.params;
    const result = splitString(input);
    res.json(result);
});

app.get('/concatenate/:param1/:param2', (req: Request, res: Response) => {
    const { param1, param2 } = req.params;
    const result = concatenateStrings(param1, param2);
    res.json(result);
});
//3.------Listen to the required port using Express instance i.e app
app.listen(port, ()=> {
console.log(` Hii we are comfortable and server is listeninssasg at:$(port)`);
})