import express from 'express';

const tableRouter = express.Router();

// GET /tables: Retrieves all tables in the restaurant
// GET /tables/:id: Retrieves a specific table by its ID
// POST /tables: Creates a new table
// PUT /tables/:id: Updates a table by its ID
// DELETE /tables/:id: Deletes a table by its ID

export default tableRouter;
