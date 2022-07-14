export interface ICartProduct {
    id: number;
    productId: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    sizeId: number;
    size: string;
    quantity: number;
}

export interface ICart {
    products: { [key: string]: ICartProduct };
    setProducts: Function;
    setLoadCart: Function;
    loadCart: boolean;
}