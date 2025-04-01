"use client";

import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { cartState, Product as ProductType } from '../state/cart';

interface ProductProps {
    product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
    const [cart, setCart] = useRecoilState(cartState);

    const addToCart = () => {
        setCart((prevCart) => ({
            ...prevCart,
            products: [...prevCart.products, product], // 상품 추가
        }));
        console.log("장바구니 상태 업데이트:", cart.products); // 디버깅 로그
    };

    return (
        <div className="p-4 border border-gray-300 rounded-md">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-lg font-bold">{product.price}원</p>
            <button
                onClick={addToCart}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                장바구니에 담기
            </button>
        </div>
    );
};

export default Product;