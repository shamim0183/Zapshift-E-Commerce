import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

interface Item {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

async function getItems(): Promise<Item[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
    const res = await fetch(`${apiUrl}/api/items`, {
      cache: "no-store", // Always fetch fresh data
    })

    if (!res.ok) {
      throw new Error("Failed to fetch items")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching items:", error)
    return []
  }
}

export default async function ItemsPage() {
  const items = await getItems()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover our curated collection of premium items
          </p>
        </div>

        {/* Items Grid */}
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No items available at the moment. Please check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
            {items.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="glass rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      {/* Stock Badge */}
                      {item.stock < 10 && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                            Only {item.stock} left!
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold group-hover:opacity-90 transition-opacity">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
