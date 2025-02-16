"use client";
import ErrorMessage from "@/components/error-message";
import { app } from "@/firebase/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("UserData") || "{}");
    if (userData && userData.uid) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [isError]);

  const errorMessages = {
    "auth/invalid-email": "Invalid email",
    "auth/wrong-password": "Wrong password",
    "auth/invalid-credential": "Invalid email or password",
    "auth/network-request-failed": "Network error",
    "auth/too-many-requests": "Too many requests, try again later",
    "auth/user-not-found": "User not found",
  };

  const handleSubmit = (userEmail: string, password: string) => {
    setLoading(true);
    if (!userEmail || !password) {
      setError("Please enter email and password");
      setLoading(false);
      return;
    }
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(" User Succesfully Logged In", user);
        const userData = {
          userName: user.displayName,
          userEmail: user.email,
          uid: user.uid,
        };
        localStorage.setItem("UserData", JSON.stringify(userData));
        setUserEmail("");
        setPassword("");
        // Redirect to last visited page or default to home
        const lastVisited = localStorage.getItem("lastVisitedURL") || "/";
        router.push(lastVisited);
      })
      .catch((error) => {
        const errorCode = error.code as keyof typeof errorMessages;
        console.log(errorCode);
        setError(errorMessages[errorCode]);
        setLoading(false);
      });
  };

  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
      <div className="p-4 sm:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="text-black text-base font-semibold">
            Email Address
          </label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            id="email"
            placeholder="Your Email address..."
            className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-black text-base font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter your password..."
            className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
          />
        </div>
        {isError && <ErrorMessage message={isError} />}
        {/* Submit Button */}
        <div className="mb-4 text-center">
          <div className="text-sm mb-3">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary">
              Sign Up
            </Link>
            .
          </div>
          <button
            onClick={() => handleSubmit(userEmail, password)}
            className="bg-primary text-white text-base md:text-lg py-2.5 md:py-3 px-4 md:px-6 rounded-lg outline-none focus:outline-none"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
