import Menu from '../models/menu.model.js';
import Category from '../models/category.model.js';

// Retrieves all menus
export const getAllMenuService = async () => {
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
};

// Retrieves a specific menu item by its ID
export const getMenuByIdService = async (id) => Menu.findById(id);

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
};

// Updates a menu item by its ID
export const updateMenuService = async (id, menuData) => {
    const existingMenu = await Menu.findById(id);
    if (!existingMenu) {
        throw {
            error: true,
            status: 404,
            message: 'Menu item not found'
        };
    }
    const updatedMenu = await Menu.findByIdAndUpdate(id, menuData, { new: true });
    return {
        status: 200,
        success: true,
        message: 'Menu item Updated successfully',
        updatedMenu
    };
};

// Deletes a menu item by its ID
export const deleteMenuService = async (id) => {
    const existingMenu = await Menu.findById(id);

    if (!existingMenu) {
        return {
            success: false,
            message: 'Menu item not found',
            status: 404
        };
    } else {
        await Menu.findByIdAndDelete(id);
        return {
            success: true,
            message: 'Menu item deleted successfully',
            status: 200
        };
    }
};

export const createMenuCategoryService = async (categoryData) => {
    const { name } = categoryData;
    if (!name.length) {
        return {
            error: true,
            message: 'Name is required',
            status: 404
        };
    }

    const existingCategory = await Category.findOne({ name: name.toLowerCase() });
    if (existingCategory) {
        return {
            error: true,
            message: 'Category already exists',
            status: 404
        };
    }

    const newCategory = await Category.create({ name: name.toLowerCase() });
    return {
        status: 200,
        success: true,
        message: 'Menu Category created successfully',
        newCategory
    };
};
