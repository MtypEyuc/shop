"use client"

import { useRecoilState } from "recoil";
import { cartState } from "../store/cartAtom";

// @ts-ignore
export default function ProductCard({ product }) {
    const [cart, setCart] = useRecoilState(cartState);

    const addToCart = () => {
        setCart([...cart, { ...product, quantity: 1 }]);
        alert("장바구니에 추가되었습니다");
    };

    return (
        <div className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product.price} 원</p>
            <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 mt-2">
                장바구니 추가하기
            </button>
        </div>
    );
}