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

export interface ICartProducts {
    [key: string]: ICartProduct
}

export interface ICart {
    products: ICartProducts;
    setProducts: Function;
    setLoadCart: Function;
    loadCart: boolean;
}