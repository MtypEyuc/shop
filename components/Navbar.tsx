import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/">Home</Link>
                <Link href="/cart">Cart</Link>
            </div>
        </nav>
    );
}