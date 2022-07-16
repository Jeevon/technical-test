import {
    IProduct,
    ICartProducts
} from "../../types";

export const product: IProduct = {
    id: 1,
    title: "Classic Tee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 75,
    imageURL: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
    sizeOptions: [{
            id: 1,
            label: "S"
        },
        {
            id: 2,
            label: "M"
        },
        {
            id: 3,
            label: "L"
        }
    ]
}

export const cartItems: ICartProducts = {
    '1:1': {
        id: 1,
        productId: 1,
        title: "Classic Tee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        price: 75,
        imageUrl: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
        sizeId: 1,
        size: "S",
        quantity: 3,
    },
    '1:2': {
        id: 1,
        productId: 1,
        title: "Classic Tee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        price: 75,
        imageUrl: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
        sizeId: 2,
        size: "M",
        quantity: 4,
    }
};