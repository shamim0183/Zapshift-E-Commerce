import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Package,
  Shield,
  ShoppingBag,
  Star,
  TruckIcon,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <div className="fixed inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 dark:from-black/70 dark:via-black/50 dark:to-black/90 backdrop-blur-[1px]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-slide-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Welcome to ZapShift
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto animate-slide-up drop-shadow-md font-light tracking-wide"
            style={{ animationDelay: "0.2s" }}
          >
            Discover premium quality products delivered at lightning speed. Your
            one-stop shop for everything you need.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/items"
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer">
          <Link
            href="#features"
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose ZapShift?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experience shopping like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Lightning Fast",
                description:
                  "Get your orders delivered in record time with our express shipping.",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure Payments",
                description:
                  "Shop with confidence using our encrypted payment system.",
              },
              {
                icon: <TruckIcon className="w-12 h-12" />,
                title: "Free Shipping",
                description: "Enjoy free shipping on all orders over $50.",
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Premium Quality",
                description: "Only the finest products make it to our catalog.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass hover-lift cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Shopping made simple in 3 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse Products",
                description:
                  "Explore our wide selection of premium items across various categories.",
              },
              {
                step: "02",
                title: "Add to Cart",
                description:
                  "Select your favorite items and add them to your cart with one click.",
              },
              {
                step: "03",
                title: "Fast Delivery",
                description:
                  "Complete your order and receive it at your doorstep in no time.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-500/50 dark:text-blue-400/50 mb-4">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Check out our bestselling items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Premium Headphones",
                price: "$299.99",
                image:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
              },
              {
                name: "Smart Watch Pro",
                price: "$399.99",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80",
              },
              {
                name: "Leather Laptop Bag",
                price: "$149.99",
                image:
                  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80",
              },
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 hover-lift">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/items"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity hover-lift"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Verified Buyer",
                comment:
                  "Amazing quality and super fast delivery! I've never experienced such excellent customer service.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Regular Customer",
                comment:
                  "The products are exactly as described. ZapShift has become my go-to online store.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Happy Shopper",
                comment:
                  "Love the variety and quality! The prices are unbeatable for such premium items.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover-lift">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                number: "50K+",
                label: "Happy Customers",
              },
              {
                icon: <Package className="w-12 h-12" />,
                number: "100K+",
                label: "Products Sold",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                number: "99%",
                label: "Satisfaction Rate",
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                number: "24/7",
                label: "Customer Support",
              },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of satisfied customers and experience the ZapShift
            difference today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity hover-lift flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Browse Products</span>
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 transition-all hover-lift"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
