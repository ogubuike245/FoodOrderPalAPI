import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: {
        type: [
            {
                menu: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Menu',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                },
                customization: {
                    type: String,
                    default: ''
                }
            }
        ],
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        required: true,
        enum: ['placed', 'in progress', 'completed', 'cancelled'],
        default: 'placed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
