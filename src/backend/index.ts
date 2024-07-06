import express, { Request } from 'express';
import { ic } from 'azle';
import { Seeds } from './seed';
import { Notification } from './notify';

let db = {
    hello: ''
};

const app = express();

app.use(express.json());

//Health check
app.get('/health', (_req, res) => {
    res.status(200).json({ message: 'Hello Zitlala!' });
});

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

// Route to send notifications
app.post('/send-notification', (req, res) => {
    //The request body could change to include userIdentity and evenType
    //const { userIdentity, evenType } = req.body;
    // Recommendation: it will be better to user user_identity instead of userId 
    const { userId, eventType } = req.body; 
    
    //Seed data
    //It is temporary data to simulate the user data
    const seed = Seeds();
    console.log(seed);

    //Get user by id
    // It could change to get user by userIdentity
    const user = seed.find((u) => u.id === userId);
    console.log(user);

    if (!user) {
    return res.status(404).json({ error: 'User not found' });
    }
  
    try {
        //Trigger notification
        //Return a json with the message of notification if the event type is found
        let mensaje = Notification(eventType, userId);
        res.status(200).json({respuesta: mensaje});
    }
    catch (err) {
        console.error(`Failed to send notification to ${user.name}: ${(err as Error).message}`);
        return res.status(500).json({ error: 'Failed to send notification' });
    }

    res.status(200).json({ message: 'Notification sent successfully' });
});


app.use(express.static('/dist'));

app.listen();
