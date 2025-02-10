import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-green-600">
        Sustainable Mycelium Furniture
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Eco-friendly, durable, and biodegradable furniture crafted from
        mycelium. Elevate your space with sustainable design.
      </p>
      <Image
        className="mx-auto mt-6"
        src="/../assets/mycelium-furniture.jpeg"
        alt="Mycelium Furniture"
        width={500}
        height={300}
      />
      <div className="mt-8">
        <Link
          href="/products"
          className="px-6 py-3 bg-green-600 text-white rounded-md text-lg shadow-md hover:bg-green-700"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}
