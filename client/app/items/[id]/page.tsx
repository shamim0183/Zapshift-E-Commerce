import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ArrowLeft, Package, Shield, TruckIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Item {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

async function getItem(id: string): Promise<Item | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
    const res = await fetch(`${apiUrl}/api/items/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) {
      return null
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching item:", error)
    return null
  }
}

export default async function ItemDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const item = await getItem(id)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 py-12">
        {/* Back Button */}
        <Link
          href="/items"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
          {/* Image */}
          <div className="relative">
            <div className="glass rounded-3xl overflow-hidden sticky top-24">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="animate-slide-up">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full">
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {item.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-bold text-blue-600">
                ${item.price.toFixed(2)}
              </span>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {item.stock > 0 ? (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    In Stock ({item.stock} available)
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 dark:text-red-400 font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Product Description
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 glass rounded-xl text-center">
                <TruckIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Free Shipping
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  On orders over $50
                </p>
              </div>
              <div className="p-4 glass rounded-xl text-center">
                <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Fast Delivery
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  2-3 business days
                </p>
              </div>
              <div className="p-4 glass rounded-xl text-center">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Secure Payment
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  100% protected
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                disabled={item.stock === 0}
                className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
              <Link
                href="/items"
                className="flex-1 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:border-blue-500 transition-all text-center"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 glass rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Product Information
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Product ID:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {item.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Category:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {item.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Availability:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {item.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
