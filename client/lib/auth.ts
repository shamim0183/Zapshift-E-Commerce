import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth"
import Cookies from "js-cookie"
import { auth } from "./firebase"

// Google Auth Provider
const googleProvider = new GoogleAuthProvider()

// Sign in with Email and Password
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const token = await userCredential.user.getIdToken()

    // Store token in cookie
    Cookies.set("auth_token", token, { expires: 7 }) // 7 days

    return { success: true, user: userCredential.user }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Sign up with Email and Password
export const signupWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const token = await userCredential.user.getIdToken()

    // Store token in cookie
    Cookies.set("auth_token", token, { expires: 7 })

    return { success: true, user: userCredential.user }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Sign in with Google
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const token = await result.user.getIdToken()

    // Store token in cookie
    Cookies.set("auth_token", token, { expires: 7 })

    return { success: true, user: result.user }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Logout
export const logout = async () => {
  try {
    await signOut(auth)
    Cookies.remove("auth_token")
    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!Cookies.get("auth_token")
}

// Get current user
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}
