const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// In-memory data store for items
let items = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and supreme comfort for all-day wear.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Electronics",
    stock: 50,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description:
      "Stay connected and track your fitness goals with this feature-rich smartwatch. Includes heart rate monitoring, GPS, and 7-day battery life.",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Electronics",
    stock: 30,
  },
  {
    id: "3",
    name: "Leather Laptop Bag",
    description:
      "Handcrafted genuine leather laptop bag with multiple compartments. Perfect for professionals who value style and functionality.",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
    category: "Accessories",
    stock: 25,
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description:
      "Premium ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back for maximum comfort during long work sessions.",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80",
    category: "Furniture",
    stock: 15,
  },
  {
    id: "5",
    name: "Mechanical Keyboard RGB",
    description:
      "Professional mechanical keyboard with customizable RGB lighting, tactile switches, and programmable keys for gaming and productivity.",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    category: "Electronics",
    stock: 40,
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    description:
      "Compact yet powerful Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour playtime. Perfect for outdoor adventures.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    category: "Electronics",
    stock: 60,
  },
  {
    id: "7",
    name: "Designer Sunglasses",
    description:
      "Premium polarized sunglasses with UV400 protection and lightweight titanium frame. Timeless style meets modern technology.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    category: "Accessories",
    stock: 35,
  },
  {
    id: "8",
    name: "Yoga Mat Premium",
    description:
      "Extra-thick eco-friendly yoga mat with non-slip surface and carrying strap. Perfect for yoga, pilates, and fitness enthusiasts.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    category: "Fitness",
    stock: 45,
  },
  {
    id: "9",
    name: "Stainless Steel Water Bottle",
    description:
      "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    category: "Lifestyle",
    stock: 80,
  },
  {
    id: "10",
    name: "Professional Camera Backpack",
    description:
      "Durable camera backpack with customizable padded dividers, weatherproof exterior, and room for DSLR, lenses, and accessories.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    category: "Photography",
    stock: 20,
  },
]

// Routes

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items)
})

// Get single item by ID
app.get("/api/items/:id", (req, res) => {
  const { id } = req.params
  const item = items.find((item) => item.id === id)

  if (!item) {
    return res.status(404).json({ message: "Item not found" })
  }

  res.json(item)
})

// Add new item
app.post("/api/items", (req, res) => {
  const { name, description, price, image, category, stock } = req.body

  // Basic validation
  if (!name || !description || !price || !image) {
    return res
      .status(400)
      .json({
        message:
          "Please provide all required fields: name, description, price, and image",
      })
  }

  // Create new item
  const newItem = {
    id: String(items.length + 1),
    name,
    description,
    price: parseFloat(price),
    image,
    category: category || "Uncategorized",
    stock: stock || 0,
  }

  items.push(newItem)
  res.status(201).json({ message: "Item added successfully", item: newItem })
})

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
