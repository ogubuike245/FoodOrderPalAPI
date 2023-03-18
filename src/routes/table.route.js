import express from 'express';

const tableRouter = express.Router();

tableRouter.get('/', (req, res) => {
    res.send('WELCOME TO TABLE SECTION');
});

// GET /table: Retrieves all tables
tableRouter.get('/all', (req, res) => {
    // handle retrieving table items based on the data in the request body
    res.send('get all table items');
});

// GET /table/:id: Retrieves a specific table by its ID
tableRouter.get('/:id', (req, res) => {
    // handle retrieving  a  table item based on the data in the request body
    res.send('Get a specific  table item');
});
// POST /table: Creates a new table
tableRouter.post('/', (req, res) => {
    // handle creating a new table item based on the data in the request body
    res.send('Creating a new table item');
});
// PUT /table/:id: Updates a table by its ID
tableRouter.put('/:id', (req, res) => {
    // handle updating a  table item based on the data in the request body
    res.send('Update a  table item');
});
// DELETE /table/:id: Deletes a table by its ID
tableRouter.delete('/:id', (req, res) => {
    // handle deleting a  table item based on the data in the request body
    res.send('Delete a table item');
});

export default tableRouter;
