import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    description: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    image: {
        type: String,
        lowercase: true,
        default: 'YEAH',
        trim: true
    },
    vegetarian: {
        type: Boolean,
        default: false,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    carbohydrate: {
        type: Number,
        required: true
    },

    history: {
        type: String,
        required: true
    },
    ratings: {
        type: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                rating: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                }
            }
        ],
        default: []
    },
    customizations: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                options: {
                    type: [String],
                    required: true
                },
                defaultOption: {
                    type: String,
                    required: true
                }
            }
        ],
        default: []
    }
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
