// components/CartIcon.tsx
"use client"; // ✅ 클라이언트 컴포넌트로 설정

import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { cartState } from '../state/cart';

const CartIcon = () => {
    const router = useRouter();
    const { products } = useRecoilValue(cartState);

    const handleClick = () => {
        router.push('/cart');
    };

    return (
        <div className="relative cursor-pointer" onClick={handleClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18l-1.5 9h-15L3 3zm1.5 9h12l1.5 9H5L4.5 12z"
                />
            </svg>
            {products.length > 0 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                    {products.length}
                </div>
            )}
        </div>
    );
};

export default CartIcon;
