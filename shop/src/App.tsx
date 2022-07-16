import { Col, Row } from 'antd';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/layouts/Header/Header';
import Product from './Components/Product/Product';
import { ICart, ICartProduct, ICartProducts } from './types/cart';

export const CartContext = createContext<ICart>({ products: {}, setProducts: () => {}, loadCart: true, setLoadCart: () => {} });

function App() {
  const [products, setProducts] = useState<ICartProducts>({});
  const [loadCart, setLoadCart] = useState<boolean>(true);

  useEffect(() => {
    if (loadCart) {
      axios.get('http://localhost:3000/cart-items')
        .then(async (response) => {
            const items: ICartProducts = {};
            await response.data.forEach((i: ICartProduct) => {
              items[`${i.productId}:${i.sizeId}`] = { ...i };
            });

            setProducts(items);
            setLoadCart(false);
        });
    }
  }, [loadCart]);

  return (
    <CartContext.Provider value={{ products, setProducts, loadCart, setLoadCart }}>
      <Row justify='center'>
        <Col className="app-container" span={18}>
          <Row>
            <Col span={24}>
              <Header />
            </Col>
          </Row>
          <Row justify='center'>
            <Col span={16}>
              <Product />
            </Col>
          </Row>
        </Col>

      </Row>
    </CartContext.Provider> 
  );
}

export default App;
