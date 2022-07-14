export interface ISizeOptions {
    id: number;
    label: string;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    sizeOptions: ISizeOptions[]
}