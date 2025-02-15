"use client";
import ErrorMessage from "@/components/error-message";
import { app, db } from "@/firebase/firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("UserData") || "{}");
    if (userData && userData.userEmail) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [isError]);

  const handleSubmit = (
    userName: string,
    userEmail: string,
    password: string
  ) => {
    setLoading(true);
    if (!userEmail || !password) {
      setError("Please enter email and password");
      setLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Succesfully Created", user);
        saveUserInfo(userName, userEmail, user.uid);
        setUserName("");
        setUserEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
        errorCode === "auth/invalid-email" && setError("Invalid email");
        errorCode === "auth/weak-password" && setError("Weak password");
        errorCode === "auth/email-already-in-use" &&
          setError("Email already in use");
        setLoading(false);
      });
  };

  const saveUserInfo = async (
    userName: string,
    userEmail: string,
    uid: string
  ) => {
    try {
      const setDBUserData = { userName, userEmail, uid };
      // Add a new document in collection "Users"
      await setDoc(doc(db, "Users", uid), setDBUserData);
      localStorage.setItem("UserData", JSON.stringify(setDBUserData));
      const lastVisited = localStorage.getItem("lastVisitedURL") || "/";
      router.push(lastVisited);
      console.log("Document successfully written!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
      <div className="p-4 sm:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="text-black text-base font-semibold"
          >
            Full Name
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fullName"
            placeholder="Your Full Name..."
            className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
          />
        </div>

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
            already have an account{" "}
            <Link href="/login" className="text-primary">
              Sign In
            </Link>
            .
          </div>
          <button
            onClick={() => handleSubmit(userName, userEmail, password)}
            className="bg-primary text-white text-base md:text-lg py-2.5 md:py-3 px-4 md:px-6 rounded-lg outline-none focus:outline-none"
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
