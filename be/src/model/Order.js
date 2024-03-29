import mongoose from "mongoose";
const moment = require('moment');
const Order = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        required: true,
        default: moment().format(),
    },
    statusId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Status",
        required: true
    },
    productList: [
        {
            productId: {
                type: String,
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            categoryId: {
                type: String,
                required: true
            },
            brandId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            unitPrice: {
                type: Number,
                required: true
            },
            originalPrice: {
                type: Number,
                required: true
            },
        }
    ]
}, { timestamps: true });

export default mongoose.model("Order", Order);