import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, name: "상품 A", price: 20000, image: "static/img/img.jpg" },
    { id: 2, name: "상품 B", price: 30000, image: "static/img/img.jpg" },
    { id: 3, name: "상품 C", price: 25000, image: "static/img/img.jpg" },
    { id: 4, name: "상품 D", price: 40000, image: "static/img/img.jpg" },
];

export default function Home() {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            {products.map((product) => (
                <div key={product.id} className="w-full sm:w-1/2 md:w-1/4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}