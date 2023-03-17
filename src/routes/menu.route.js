import express from 'express';

const menuRouter = express.Router();

// GET /menu: Retrieves the restaurant's menu
// GET /menu/:id: Retrieves a specific menu item by its ID
// POST /menu: Creates a new menu item
// PUT /menu/:id: Updates a menu item by its ID
// DELETE /menu/:id: Deletes a menu item by its ID

export default menuRouter;
