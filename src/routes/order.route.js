import express from 'express';

import {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
} from '../controllers/order.controller.js';
const orderRouter = express.Router();

orderRouter.get('/', (req, res) => {
    res.send('WELCOME TO ORDERS SECTION');
});

// GET /order: Retrieves all orders
orderRouter.get('/all', getAllOrders);

// GET /order/:id: Retrieves a specific order by its ID
orderRouter.get('/:id', getOrderById);
// POST /order: Creates a new order
orderRouter.post('/create', createOrder);
// PUT /order/:id: Updates an order by its ID
orderRouter.put('/update/:id', updateOrderById);
// DELETE /order/:id: Deletes a order by its ID
orderRouter.delete('/delete/:id', deleteOrderById);

export default orderRouter;
