"use client";

import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cartAtom";

export default function CartPage() {
    const cart = useRecoilValue(cartState);

    // 전체 가격 계산
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">쇼핑 카트</h1>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="border p-2 mb-2">
                                {item.name} - {item.price} (x{item.quantity})
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-lg font-bold">주문 총액: {totalPrice} 원</h2>
                    </div>
                </div>
            )}
        </div>
    );
}
