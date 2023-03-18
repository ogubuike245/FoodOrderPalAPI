import {
    createMenuCategoryService,
    createMenuService,
    deleteMenuService,
    getAllMenusService,
    getMenuByIdService,
    updateMenuService
} from '../services/menu.service.js';

// GET /menu: Retrieves the restaurant's menu
export const getAllMenus = async (req, res, next) => {
    try {
        getAllMenusService();
    } catch (error) {
        next(error);
    }
};

// GET /menu/:id: Retrieves a specific menu item by its ID
export const getMenuById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const menu = getMenuByIdService(id);

        if (!menu) {
            res.status(404).json({ message: 'Menu item not found' });
        } else {
            res.status(200).json(menu);
        }
    } catch (error) {
        next(error);
    }
};

// POST /menu: Creates a new menu item
export const createMenu = async (req, res, next) => {
    try {
        const newMenu = createMenuService(req.body);
        const { error, menu, message } = newMenu;
        if (error) {
            res.status(400).json({ message });
        }
        res.status(201).json(menu);
    } catch (error) {
        next(error);
    }
};

// POST /category: Creates a new menu category
export const createMenuCategory = async (req, res, next) => {
    const { name } = req.body;

    try {
        const newCategory = createMenuCategoryService(name);
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};

// PUT /menu/:id: Updates a menu item by its ID
export const updateMenu = async (req, res, next) => {
    try {
        const result = updateMenuService(req.params.id, req.body);

        if (!result) {
            res.status(404).json({ message: 'Menu item not found' });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        next(error);
    }
};

// DELETE /menu/:id: Deletes a menu

export const deleteMenu = async (req, res, next) => {
    try {
        const result = deleteMenuService(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Menu item not found' });
        } else {
            res.status(200).json({ message: 'Menu item deleted successfully' });
        }
    } catch (error) {
        next(error);
    }
};
