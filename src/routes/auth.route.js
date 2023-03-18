import express from 'express';

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.send('WELCOME TO AUTH SECTION');
});
// POST /register: Creates a new user account
authRouter.get('/all', (req, res) => {
    res.send('get all Users');
});

// POST /verify: verifies user Account
authRouter.get('/verify', (req, res) => {
    res.send('get specific user');
});

// POST /login: Logs a user into their account
authRouter.put('/login', (req, res) => {
    res.send('Update a specific user info');
});

export default authRouter;
