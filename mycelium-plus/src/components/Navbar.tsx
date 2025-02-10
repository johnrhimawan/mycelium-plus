import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-600">
          Mycelium+
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-green-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-500">
            About
          </Link>
          <Link href="/products" className="hover:text-green-500">
            Products
          </Link>
          <Link href="/faq" className="hover:text-green-500">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-green-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
