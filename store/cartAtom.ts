import { atom } from "recoil";

export type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export const cartState = atom<Product[]>({
    key: "cartState",
    default: [],
});
