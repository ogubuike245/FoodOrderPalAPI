import {
    createMenuCategoryService,
    createMenuService,
    deleteMenuService,
    getAllMenuService,
    getMenuByIdService,
    updateMenuService
} from '../services/api/v1/menu.service.js';

// GET /all: Retrieves the restaurant's menu
export const getAllMenus = async (req, res, next) => {
    try {
        const { status, error, message, menu } = await getAllMenuService();
        return res.status(Number(status)).json({
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

// GET /api/v1/menu/:id: Retrieves a specific menu item by its ID
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

// POST /api/v1/menu/create: Creates a new menu item
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

// PUT /api/v1/menu/update/:id: Updates a menu item by its ID
export const updateMenu = async (req, res) => {
    try {
        const result = await updateMenuService(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({
                success: false,
                message: result.message
            });
        } else {
            const { status, success, message, updatedMenu } = result;
            return res.status(status).json({
                success,
                message,
                updatedMenu
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: true,
            message: 'Internal server error. Please try again later.',
            error: error.message
        });
    }
};

// DELETE /api/v1/menu/delete/:id: Deletes a menu

export const deleteMenu = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const { id } = req.params;

        const { status, error, message } = await deleteMenuService(id);

        return res.status(Number(status)).json({
            success: !error,
            message
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

// POST /api/v1/menu/create/category: Creates a new menu category
export const createMenuCategory = async (req, res, next) => {
    try {
        const { status, error, message, newCategory } = await createMenuCategoryService(req.body);

        return res.status(Number(status)).json({
            success: !error,
            message,
            newCategory
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
