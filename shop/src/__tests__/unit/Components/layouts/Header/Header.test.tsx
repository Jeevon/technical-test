import { render, screen } from '@testing-library/react';
import Header from '../../../../../Components/layouts/Header/Header';

it('should render header successfully', () => {
    render(<Header />);

    const linkElement = screen.getByText(/My Cart/i);
    expect(linkElement).toBeInTheDocument();
});
