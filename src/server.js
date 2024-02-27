const express = require('express')
const uuid = require('uuid')

const app = express()

app.use(express.json())

const checkId = (req, res, next) => {
  const {id} = req.params

  const index = orders.findIndex((item) => item.id === id)

  if(index < 0) {
    return res.status(404).json({error: "User not found"})
  }

  req.userId = id
  req.orderIndex = index

  next()
}

const paramsReq = (req, res, next) => {
  const url = req.url
  const method = req.method
  console.log(url, method)

  next()
}

app.use(paramsReq)


const orders = []

app.get('/orders', (req, res) => {
  res.json(orders)
})

app.get('/orders/:id', checkId, (req, res) => {
  const id = req.userId
  const order = orders.filter((item) => item.id === id)
  res.json(order)
})

app.post('/orders', (req, res) => {
  const {order, clientName, price} = req.body

  const newOrder = {
    id: uuid.v4(),
    order,
    clientName,
    price,
    status: "Em preparação"
  }

  orders.push(newOrder)

  return res.status(201).json(newOrder)
})

app.put('/orders/:id', checkId, (req, res) => {
  const {order, clientName, price} = req.body
  const index = req.orderIndex
  const id = req.userId

  const orderUpdated = {
    id,
    order,
    clientName,
    price,
    status: "Em preparação"
  }

  orders[index] = orderUpdated

  res.status(204).json()
})

app.delete('/orders/:id', checkId, (req, res) => {
  const index = req.orderIndex

  orders.splice(index, 1)

  return res.status(204).json()
})

app.patch('/orders/:id', checkId, (req, res) => {
  const index = req.orderIndex

  const order = orders[index]

  order.status = "Pronto"

  res.status(204).json()
})

app.listen(3000, () => {
  console.log('🔥 Server is running')
})