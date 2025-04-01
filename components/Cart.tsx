import { useRecoilValue } from "recoil";
import { cartState } from "../store/cartAtom";
export default function CartPage() {
    const cart = useRecoilValue(cartState);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="border p-2 mb-2">
                            {item.name} - ${item.price} (x{item.quantity})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}