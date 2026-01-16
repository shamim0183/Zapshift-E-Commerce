// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl4RSHslHhQy56hJtzUISkccKFWM1STWE",
  authDomain: "zap-shift-7a94e.firebaseapp.com",
  projectId: "zap-shift-7a94e",
  storageBucket: "zap-shift-7a94e.firebasestorage.app",
  messagingSenderId: "229535873024",
  appId: "1:229535873024:web:42a1aa7d5ca3405fd500e5",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app
