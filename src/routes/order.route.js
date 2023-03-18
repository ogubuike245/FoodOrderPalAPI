import express from 'express';

const orderRouter = express.Router();

orderRouter.get('/', (req, res) => {
    res.send('WELCOME TO ORDERS SECTION');
});

// GET /order: Retrieves all orders
orderRouter.get('/all', (req, res) => {
    // handle retrieving   order items based on the data in the request body
    res.send('get all order items');
});

// GET /order/:id: Retrieves a specific order by its ID
orderRouter.get('/:id', (req, res) => {
    // handle retrieving  an  order item based on the data in the request body
    res.send('Get a specific  order item');
});
// POST /order: Creates a new order
orderRouter.post('/', (req, res) => {
    // handle creating a new order item based on the data in the request body
    res.send('Creating a new order item');
});
// PUT /order/:id: Updates an order by its ID
orderRouter.put('/:id', (req, res) => {
    // handle updating an  order item based on the data in the request body
    res.send('Update a  order item');
});
// DELETE /order/:id: Deletes a order by its ID
orderRouter.delete('/:id', (req, res) => {
    // handle deleting an  order item based on the data in the request body
    res.send('Delete a order item');
});

export default orderRouter;
