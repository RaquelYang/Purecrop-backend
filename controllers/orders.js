import orders from '../models/orders.js'
import users from '../models/users.js'

export const checkout = async (req, res) => {
  try {
    const hasNotSell = await users.aggregate([
      {
        $match: {
          _id: req.user._id
        }
      },
      {
        $project: {
          'cart.product': 1
        }
      },
      {
        $lookup: {
          from: 'products',
          localField: 'cart.product',
          foreignField: '_id',
          as: 'cart.product'
        }
      },
      {
        $match: {
          'cart.product.sell': false
        }
      }
    ])
    if (hasNotSell) {
      res.status(400).send({ success: false, message: '包含下架產品' })
      return
    }
    const result = await orders.create({ user: req.user._id, products: req.user.cart })
    req.user.cart = []
    await req.user.save()
    res.status(200).send({ success: false, message: '', result: result._id })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getMyOrders = async (req, res) => {

}
export const getAllOrders = async (req, res) => {

}
