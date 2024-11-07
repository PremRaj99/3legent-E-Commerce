import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    paymentOption: {
        type: String,
        required: true,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery']
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;