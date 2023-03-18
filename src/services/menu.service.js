import Menu from '../models/menu.model.js';
import Category from '../models/category.model.js';

// Retrieves all menus
export const getAllMenuService = async () => {
    try {
        const menu = await Menu.find({});
        if (!menu.length) {
            return {
                error: true,
                message: 'No menus found.',
                status: 404
            };
        }
        return {
            success: true,
            menu,
            status: 200
        };
    } catch (error) {
        return {
            error: true,
            message: 'Internal server error.',
            status: 500
        };
    }
};

// Retrieves a specific menu item by its ID
export const getMenuByIdService = async (id) => Menu.findById(id);

// Creates a new menu item

export const createMenuService = async (menuData) => {
    try {
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
        } = menuData;

        if (!name || !price || !category_id || !description) {
            return {
                error: true,
                message: 'Name, price, and category are required',
                status: 404
            };
        }

        const existingMenu = await Menu.findOne({ name: name.toLowerCase() });
        if (existingMenu) {
            return {
                status: 404,
                error: true,
                message: 'A menu with that name already exists'
            };
        }

        let category = await Category.findOne({ _id: category_id });
        if (!category) {
            return {
                error: true,
                status: 404,
                message: 'Category does not exist'
            };
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

        return {
            status: 200,
            success: true,
            message: 'Menu item created successfully',
            newMenu
        };
    } catch (error) {
        return {
            error: true,
            message: 'Internal server error.',
            status: 500
        };
    }
};

// Updates a menu item by its ID
export const updateMenuService = async (id, menuData) => {
    const menu = await Menu.findByIdAndUpdate(id, menuData, { new: true });
    if (!menu) {
        throw new Error('Menu item not found');
    }
    return menu;
};

// Deletes a menu item by its ID
export const deleteMenuService = async (id) => {
    const menu = await Menu.findByIdAndDelete(id);
    if (!menu) {
        throw new Error('Menu item not found');
    }
    return { message: 'Menu item deleted successfully' };
};

export const createMenuCategoryService = async (categoryData) => {
    const { name } = categoryData;
    try {
        if (!name) {
            throw new Error('Name is required');
        }

        const existingCategory = await Category.findOne({ name: name.toLowerCase() });
        if (existingCategory) {
            throw new Error('Category already exists');
        }

        const newCategory = await Category.create({ name: name.toLowerCase() });
        return newCategory;
    } catch (error) {
        throw error;
    }
};
