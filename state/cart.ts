import { atom } from 'recoil';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface CartState {
    products: Product[];
}

export const cartState = atom<CartState>({
    key: 'cartState',
    default: {
        products: [], // 기본값: 빈 배열
    },
});