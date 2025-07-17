// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-maroon text-white py-6 px-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Emblem_of_Karnataka.svg/1200px-Emblem_of_Karnataka.svg.png"
          alt="Govt of Karnataka Logo"
          className="h-12 w-12 object-contain"
        />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BCWD Suratkal Hostel. Under Backward Class Welfare Department, Government of Karnataka.
        </p>
      </div>
    </footer>
  );
}