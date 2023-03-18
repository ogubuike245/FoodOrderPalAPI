import express from 'express';

const menuRouter = express.Router();

menuRouter.get('/', (req, res) => {
    res.send('WELCOME TO MENU SECTION');
});
// GET /menu: Retrieves the restaurant's menu
menuRouter.get('/all', (req, res) => {
    // handle retrieving   menu items based on the data in the request body
    res.send('get all menu items');
});
// GET /menu/:id: Retrieves a specific menu item by its ID
menuRouter.get('/:id', (req, res) => {
    // handle retrieving  a  menu item based on the data in the request body
    res.send('Get a specific  menu item');
});
// POST /menu: Creates a new menu item
menuRouter.post('/', (req, res) => {
    // handle creating a new menu item based on the data in the request body
    res.send('Creating a new menu item');
});
// PUT /menu/:id: Updates a menu item by its ID
menuRouter.put('/:id', (req, res) => {
    // handle updating a  menu item based on the data in the request body
    res.send('Update a  menu item');
});
// DELETE /menu/:id: Deletes a menu item by its ID
menuRouter.delete('/:id', (req, res) => {
    // handle deleting a  menu item based on the data in the request body
    res.send('Delete a menu item');
});

export default menuRouter;
