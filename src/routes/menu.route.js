import express from 'express';
import Menu from '../models/menu.model.js';
import Category from '../models/category.model.js';

const menuRouter = express.Router();

menuRouter.get('/', (req, res) => {
    res.send('WELCOME TO MENU SECTION');
});
// GET /menu: Retrieves the restaurant's menu
menuRouter.get('/all', async (req, res) => {
    // handle retrieving   menu items based on the data in the request body

    try {
        const menu = await Menu.find({});
        res.status(200).json(menu);
    } catch (error) {
        next(error);
    }
});
// GET /menu/:id: Retrieves a specific menu item by its ID
menuRouter.get('/:id', async (req, res, next) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) {
            res.status(404).json({ message: 'Menu item not found' });
        } else {
            res.status(200).json(menu);
        }
    } catch (error) {
        next(error);
    }
});
// POST /: Creates a new menu item

menuRouter.post('/', async (req, res, next) => {
    const {
        name,
        price,
        category_id,
        description,
        image,
        vegetarian,
        calories,
        protein,
        fat,
        carbohydrate,
        history,
        ratings,
        customizations
    } = req.body;
    try {
        if (!name || !price || !category_id || !description) {
            return res.status(400).send('Name, price, and category are required');
        }

        // Check if a menu with the same name already exists
        const existingMenu = await Menu.findOne({ name: name.toLowerCase() });
        if (existingMenu) {
            return res.status(409).send('A menu with that name already exists');
        }

        let category = await Category.findOne({ _id: category_id });
        if (!category) {
            return res.status(400).send('Category does not exist');
        }

        const menu = new Menu({
            name,
            price,
            category_id: category._id,
            description,
            image,
            vegetarian,
            calories,
            protein,
            fat,
            carbohydrate,
            history,
            ratings,
            customizations
        });
        const newMenu = await menu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        next(error);
    }
});

// POST /category: Creates a new menu category
menuRouter.post('/category', async (req, res, next) => {
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const existingCategory = await Category.findOne({ name: name.toLowerCase() });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const newCategory = await Category.create({ name: name.toLowerCase() });

        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
});

// PUT /menu/:id: Updates a menu item by its ID
menuRouter.put('/:id', async (req, res, next) => {
    try {
        const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!menu) {
            res.status(404).json({ message: 'Menu item not found' });
        } else {
            res.status(200).json(menu);
        }
    } catch (error) {
        next(error);
    }
});
// DELETE /menu/:id: Deletes a menu

menuRouter.delete('/:id', async (req, res, next) => {
    try {
        const menu = await Menu.findByIdAndDelete(req.params.id);
        if (!menu) {
            res.status(404).json({ message: 'Menu item not found' });
        } else {
            res.status(200).json({ message: 'Menu item deleted successfully' });
        }
    } catch (error) {
        next(error);
    }
});

export default menuRouter;
