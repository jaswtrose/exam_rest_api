import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
	{
		code: { type: String, required: true, unique: true },
		fullName: { type: String, required: true },
		color: { type: String, required: true },
		quantity: { type: Number, required: true }
	},
	{ timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema)
export default Order