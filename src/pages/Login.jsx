// src/pages/Login.jsx
import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-maroon text-center mb-6">
          Warden Login
        </h2>
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/login"
          redirectUrl="/warden" // after login go to Warden page
        />
      </div>
    </section>
  );
}
