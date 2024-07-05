import express, { Request } from 'express';
import { ic } from 'azle';

let db = {
    hello: ''
};

const app = express();

app.use(express.json());

app.get('/db', (_req, res) => {
    res.json(db);
});

app.post('/db/update', (req: Request<any, any, typeof db>, res) => {
    db = req.body;

    res.json(db);
});

app.get('/whoami', (req, res) => {
    res.send(ic.caller().toString());
});

app.use(express.static('/dist'));

app.listen();
