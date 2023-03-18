import Order from '../models/order.model.js';

export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

export const createOrder = async (req, res, next) => {
    const { items, customer, totalAmount } = req.body;
    try {
        if (!items || !customer || !totalAmount) {
            return res
                .status(400)
                .json({ message: 'Items, customer, and totalAmount are required' });
        }
        const newOrder = await Order.create({ items, customer, totalAmount });
        res.status(201).json(newOrder);
    } catch (error) {
        next(error);
    }
};

export const updateOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

export const deleteOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
