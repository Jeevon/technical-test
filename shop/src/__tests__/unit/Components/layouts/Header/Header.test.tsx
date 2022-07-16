import {
    fireEvent,
    getAllByAltText,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import axios from 'axios';
import Header from '../../../../../Components/layouts/Header/Header';
import mockedMatchMedia from '../../../../utils/matchMedia';
import { cartItems } from '../../../../utils/mockProductData';
import { CartContext } from '../../../../../App';
import { ICartProducts } from '../../../../../types';

const MockHeader = ({ products = cartItems }: { products?: ICartProducts }) => (
    <CartContext.Provider value={{
        products,
        setProducts: jest.fn(),
        setLoadCart: jest.fn(),
        loadCart: false,
    }}>
        <Header />
    </CartContext.Provider>
);

const mockServices = () => {
    jest.spyOn(axios, 'get')
        .mockImplementation(() => {
            return Promise.resolve({ data: [] });
        })
}

describe('App', () => {

    beforeEach(() => {
        mockedMatchMedia();
        mockServices();
    });

    it('should render header successfully', () => {
        render(<MockHeader products={{}} />);
        const cartBtn = screen.getByText(/My Cart \(0\)/i);
        expect(cartBtn).toBeInTheDocument();
    });


    it('should render header with 7 items', () => {
        render(<MockHeader />);
        const cartBtn = screen.getByText(/My Cart \(7\)/i);
        expect(cartBtn).toBeInTheDocument();
    });

    it('should render header with a disabled button if cart is empty', () => {
        render(<MockHeader products={{}} />);
        const cartBtn = screen.getByRole('button', {
            name: /My Cart/i,
        });
        expect(cartBtn).toBeInTheDocument();
        expect(cartBtn).toBeDisabled();
    });

    it('should render the mini cart on button click if cart is not empty', async () => {
        render(<MockHeader />);
        const cartBtn = screen.getByRole('button', {
            name: /My Cart/i,
        });
        expect(cartBtn).toBeInTheDocument();
        fireEvent.click(cartBtn);
        
        const sampleCartItems = Object.values(cartItems);
        const sampleCartItem = sampleCartItems[0];

        await waitFor(() => {
            expect(screen.getAllByText(sampleCartItem.title).length).toStrictEqual(sampleCartItems.length);
        });
    });
});