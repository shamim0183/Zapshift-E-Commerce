# ZapShift - Modern E-Commerce Platform

A full-stack e-commerce application built with **Next.js 15/16** (App Router) and **Express.js**, featuring Firebase authentication, dynamic product listings, and a premium modern UI design.

![Next.js](https://img.shields.io/badge/Next.js-15%2F16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Express.js](https://img.shields.io/badge/Express.js-5.0-green)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange)

## 📋 Project Description

ZapShift is a modern e-commerce platform that provides a seamless shopping experience with a beautiful, responsive interface. The application includes public product browsing, Firebase authentication (email/password and Google sign-in), and protected routes for adding new items to the catalog.

### Key Highlights

- **Premium UI Design**: Glassmorphism effects, smooth animations, gradient backgrounds
- **Full Authentication**: Firebase integration for email/password and Google OAuth
- **Dynamic Product Catalog**: Fetch and display products from Express.js REST API
- **Protected Routes**: Authenticated users can add new products
- **Responsive Design**: Mobile-first approach that works on all devices
- **Real-time Notifications**: Toast notifications for user feedback

---

## 🚀 Features Implemented

### ✅ Core Features

- [x] **Landing Page** - 7 comprehensive sections:
  - Hero with animated background
  - Features showcase
  - How It Works process
  - Featured products preview
  - Customer testimonials
  - Statistics counter
  - Call-to-action section
- [x] **Authentication System**

  - Firebase email/password login
  - Google OAuth sign-in
  - Cookie-based session management
  - Protected route middleware

- [x] **Items/Products Listing** (Public)
  - Server-side data fetching
  - Responsive grid layout (1-4 columns)
  - Category and stock badges
  - Hover effects and animations
- [x] **Item Details Page** (Public)
  - Full product information
  - Feature highlights
  - Stock availability
  - Image zoom effect
- [x] **Add Item Page** (Protected)
  - Authentication-required access
  - Comprehensive form validation
  - Image URL preview
  - Toast notifications on success/error
  - Automatic redirect after submission

### ✨ Additional Enhancements

- Responsive Navbar with mobile menu
- Multi-column Footer with social links
- Custom animations (fade-in, slide-up, float)
- Glassmorphism design elements
- Custom scrollbar styling
- Dark mode support (system preference)
- Loading states and error handling

---

## 🛠️ Technologies Used

### Frontend

- **Next.js 15/16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Modern icon library
- **Firebase** - Authentication SDK
- **js-cookie** - Cookie management

### Backend

- **Express.js 5.0** - RESTful API server
- **CORS** - Cross-Origin Resource Sharing
- **Body Parser** - JSON request parsing
- **Nodemon** - Development auto-reload

---

## 📦 Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase project (for authentication)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd Assingment-JOB-TASK(15-01-2026)
```

#### 2. Install Client Dependencies

```bash
cd client
npm install
```

#### 3. Install Server Dependencies

```bash
cd ../server
npm install
```

#### 4. Configure Environment Variables

Create a `.env.local` file in the `client` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Firebase Configuration**: The Firebase config is already set up in `client/lib/firebase.ts`. If you need to use your own Firebase project, update the configuration:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
}
```

#### 5. Run the Development Servers

**Terminal 1 - Express.js Server:**

```bash
cd server
npm run dev
```

Server will run on `http://localhost:5000`

**Terminal 2 - Next.js Client:**

```bash
cd client
npm run dev
```

Client will run on `http://localhost:3000`

#### 6. Open in Browser

Navigate to `http://localhost:3000` to view the application.

---

## 🗺️ Routes Summary

| Route         | Type      | Description                                                                                     |
| ------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `/`           | Public    | Landing page with 7 sections (Hero, Features, How It Works, Products, Testimonials, Stats, CTA) |
| `/login`      | Public    | Authentication page with email/password and Google sign-in                                      |
| `/items`      | Public    | Product listing page with all available items                                                   |
| `/items/[id]` | Public    | Individual product details page                                                                 |
| `/add-item`   | Protected | Form to add new items (requires authentication)                                                 |

### API Endpoints (Express.js)

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
| GET    | `/api/items`     | Fetch all items              |
| GET    | `/api/items/:id` | Fetch single item by ID      |
| POST   | `/api/items`     | Add new item (requires body) |
| GET    | `/health`        | Server health check          |

---

## 🔐 Authentication

### Demo Credentials

For testing purposes, you can create a new account or use Google sign-in.

**Test Account:**

- Email: `demo@zapshift.com`
- Password: `demo123456`

_(Note: You'll need to create this account in Firebase first, or use Google OAuth)_

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing
3. Enable Email/Password and Google authentication in Authentication settings
4. Copy the configuration to `client/lib/firebase.ts`

---

## 📝 Environment Variables Guide

### Client (.env.local)

```env
# Express.js API URL
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Server (Optional)

```env
# Port configuration (default: 5000)
PORT=5000
```

---

## 🎨 Features Explanation

### 1. Landing Page Sections

**Hero Section**: Eye-catching gradient background with animated floating elements, compelling headline, and clear CTAs.

**Features Section**: 4 key features displayed in a card grid with icons and descriptions.

**How It Works**: 3-step process visualization showing the shopping journey.

**Product Showcase**: Preview of featured products with hover effects and "View All" CTA.

**Testimonials**: Customer reviews with star ratings in glass-effect cards.

**Stats Section**: Impressive metrics displayed on a gradient background.

**CTA Section**: Final push for user action with prominent buttons.

### 2. Firebase Authentication

- **Email/Password**: Users can create accounts and log in with email
- **Google OAuth**: One-click sign-in with Google account
- **Session Management**: Cookies store auth tokens for 7 days
- **Protected Routes**: Automatic redirect to login for unauthenticated access
- **User Context**: React Context API provides auth state globally

### 3. Product Management

**Listing**: Server-side rendered grid of products fetched from Express.js API with category badges and stock indicators.

**Details**: Comprehensive product view with large image, price, description, stock status, and feature highlights.

**Add New**: Protected form allowing authenticated users to add products with:

- Name, description, price, image URL, category, stock
- Real-time image preview
- Client-side validation
- Success/error toast notifications

### 4. Design System

**Colors**: Vibrant gradients (blue to purple, pink to orange)

**Animations**: Custom keyframes for fade-in, slide-up, and float effects

**Glassmorphism**: Frosted glass effect on cards and navbar

**Typography**: Inter font for clean, modern look

**Responsive**: Mobile-first design with breakpoints for tablet and desktop

---

## 🧪 Testing the Application

### Manual Testing Checklist

1. **Landing Page**

   - [ ] All 7 sections load correctly
   - [ ] Animations trigger on scroll
   - [ ] Navigation links work
   - [ ] Responsive on mobile/tablet

2. **Authentication**

   - [ ] Email/password login works
   - [ ] Google sign-in works
   - [ ] Logout clears session
   - [ ] Protected routes redirect when not logged in

3. **Products**

   - [ ] Items page displays all products
   - [ ] Item details page shows correct information
   - [ ] Images load properly
   - [ ] Category and stock badges display

4. **Add Item (Protected)**
   - [ ] Redirects to login if not authenticated
   - [ ] Form validation works
   - [ ] Image preview updates
   - [ ] Success toast appears
   - [ ] New item appears in listing

---

## 🚧 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User profile page
- [ ] Order history
- [ ] Product search and filtering
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Payment integration (Stripe)
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Email notifications

---

## 📄 License

This project was created as an assignment and is available for educational purposes.

---

## 👤 Author

**Shamim Hossain**  
Created: January 2026

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Firebase for authentication services
- Unsplash for product images
- Lucide for beautiful icons
