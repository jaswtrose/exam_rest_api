import Order from "../models/Order.js"

export const getOrders = async (req, res) => {
	try {
		const orders = await Order.find()
		if (orders.length !== 0)
			res.status(200).json(orders)
		else
			res.status(204).send()
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

export const getOrder = async (req, res) => {
	try {
		const { id } = req.params
		const order = await Order.findById(id)
		if (order)
			res.status(200).json(order)
		else
			res.status(404).json({ error: 'resource not found' })
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

export const addOrder = async (req, res) => {
	try {
		const { code,fullName, color, quantity } = req.body
		const newOrder = await Order.create({
			code,
			fullName,
			color,
			quantity
		})
		const savedOrder = await newOrder.save()
		res.status(201).json({ id: savedProgram._id })
	} catch (err) {
		res.status(500).json({ error: err. message })
    }
}

export const deleteOrder = async (req, res) => {
	try {
		await Order.deleteOne({ _id: re.params.id })
		res.status(204).send()
	} catch (err) {
		console.log(err)
		res.status(404).json({ error: err.message })
	}
}

export const updateOrder = async (req, res) => {
	try {
		const filter = { _id: req.params.id }
		const { code, fullName, color, quantity } = req.body
		const update = {
			code: code,
			fullName: fullName,
			color: color,
			quantity: quantity
		}

		await Order.findOneAndUpdate(filter, update)
		res.status(204).send()
	} catch (err) {
		console.log(err)
		res.status(404).json({ error: err.message })
	}
}



