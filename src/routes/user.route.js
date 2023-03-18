import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('WELCOME TO USERS SECTION');
});

// GET /menu: Retrieves all users information
userRouter.get('/all', (req, res) => {
    res.send('get all Users');
});

// GET /users/:id: Retrieves a specific user by their ID
userRouter.get('/:id', (req, res) => {
    res.send('get specific user');
});

// PUT /users/:id: Updates a user's account information by their ID
userRouter.put('/:id', (req, res) => {
    res.send('Update a specific user info');
});

export default userRouter;
