// src/pages/Login.jsx

export default function Login() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-maroon text-center mb-6">Hostel Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-maroon"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-maroon text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-500 text-center mt-4">This is a demo login page only.</p>
      </div>
    </section>
  );
}
