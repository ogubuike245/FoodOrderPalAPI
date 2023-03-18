import express from 'express';
import {
    createMenu,
    createMenuCategory,
    deleteMenu,
    getAllMenus,
    getMenuById,
    updateMenu
} from '../controllers/menu.controller.js';

const menuRouter = express.Router();

menuRouter.get('/', (req, res) => {
    res.send('WELCOME TO MENU SECTION');
});
// GET /menu: Retrieves the restaurant's menu
menuRouter.get('/all', getAllMenus);
// GET /menu/:id: Retrieves a specific menu item by its ID
menuRouter.get('/:id', getMenuById);
// POST /: Creates a new menu item

menuRouter.post('/create', createMenu);

// POST /category: Creates a new menu category
menuRouter.post('/create/category', createMenuCategory);

// PUT /menu/:id: Updates a menu item by its ID
menuRouter.put('/update/:id', updateMenu);
// DELETE /menu/:id: Deletes a menu

menuRouter.delete('/delete/:id', deleteMenu);

export default menuRouter;
