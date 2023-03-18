import Menu from '../models/menu.model.js';
import Category from '../models/category.model.js';

// Retrieves all menus
export const getAllMenusService = async () => {
    return await Menu.find({});
};

// Retrieves a specific menu item by its ID
export const getMenuByIdService = async (id) => {
    return await Menu.findById(id);
};

// Creates a new menu item
export const createMenuService = async (menuData) => {
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
            message: 'Name, price, and category are required'
        };
    }

    const existingMenu = await Menu.findOne({ name: name.toLowerCase() });
    if (existingMenu) {
        return {
            error: true,
            message: 'A menu with that name already exists'
        };
    }

    let category = await Category.findOne({ _id: category_id });
    if (!category) {
        return {
            error: true,
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
        error,
        message,
        menu: newMenu
    };
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
