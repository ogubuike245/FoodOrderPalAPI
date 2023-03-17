import express from 'express';

const orderRouter = express.Router();

// GET /orders: Retrieves all orders
// GET /orders/:id: Retrieves a specific order by its ID
// POST /orders: Creates a new order
// PUT /orders/:id: Updates an order by its ID
// DELETE /orders/:id: Deletes an order by its ID

export default orderRouter;
