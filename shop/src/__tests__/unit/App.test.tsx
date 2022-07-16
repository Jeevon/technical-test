import react from 'react';
import {
    render,
    screen
} from '@testing-library/react';
import axios from 'axios';
import App from '../../App';
import mockedMatchMedia from '../utils/matchMedia';


const mockServices = () => {
    jest.spyOn(react, 'useState').mockImplementation(() => {
        const state = false;
        return [
            state,
            jest.fn(),
        ]
    });

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

    it('should render app successfully', () => {
        render( < App / > );
        const addToCartBtn = screen.getByText(/My cart/i)
        expect(addToCartBtn).toBeInTheDocument();
    });
});