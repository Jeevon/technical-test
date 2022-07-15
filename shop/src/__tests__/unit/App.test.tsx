import { render } from '@testing-library/react';
import App from '../../App';
import Header from '../../Components/layouts/Header/Header';
import Product from '../../Components/Product/Product';

it('should render app successfully', () => {
  const { baseElement: app } = render(<App />);
  const { baseElement: header } = render(<Header />);
  const { baseElement: product } = render(<Product />);

  expect(app).toContainElement(header);
  expect(app).toContainElement(product);
});
