import {
    createMenuCategoryService,
    createMenuService,
    deleteMenuService,
    getAllMenuService,
    getMenuByIdService,
    updateMenuService
} from '../services/menu.service.js';

// GET /all: Retrieves the restaurant's menu
export const getAllMenus = async (req, res, next) => {
    try {
        const { status, error, message, menu } = await getAllMenuService();
        return res.status(status).json({
            success: !error,
            message,
            menu
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal server error.'
        });
    }
};

// GET /menu/:id: Retrieves a specific menu item by its ID
export const getMenuById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const menu = await getMenuByIdService(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        return res.status(200).json(menu);
    } catch (error) {
        next(error);
    }
};

// POST /menu: Creates a new menu item
export const createMenu = async (req, res, next) => {
    try {
        const { status, error, message, newMenu } = await createMenuService(req.body);
        return res.status(Number(status)).json({
            success: !error,
            message,
            newMenu
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: true,
            message: 'Internal server error. Please try again later.',
            error: error.message
        });
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
