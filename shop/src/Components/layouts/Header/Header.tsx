import { 
  Row,
  Col,
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Image,
  Typography
} from 'antd';
import { useContext, useMemo } from 'react';
import { CartContext } from '../../../App';
import { ICartProduct } from '../../../types'
import './Header.css';

const { Paragraph } = Typography;

function Header() {
  const { products } = useContext(CartContext);

  const cart = (
    <Menu
      className='cart-dropdown-menu' 
      items={
        Object.values(products).map((item, key) => {
          return {
            key,
            label: (
              <Row key={key} className='cart-item-row' 
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}>

                <Col className='cart-item-image gutter-row' span={8}>
                  <Image
                    src={item.imageUrl}
                    />
                </Col>
                <Col className='cart-item-info' span={16}>
                  <Paragraph>{ item.title }</Paragraph>
                  <Paragraph>{ item.quantity }x <span className='cart-item-price'>${ item.price.toFixed(2) }</span></Paragraph>
                  <Paragraph>Size: { item.size }</Paragraph>
                </Col>
              </Row>
            ),
          }
        })
      }
    />
  );

  const getCartTotal = (items: ICartProduct[]) => {
    return items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
  }

  const cartItems = useMemo(() => getCartTotal(Object.values(products)), [products])

  const DropdownMenu = () => (
    <Dropdown
      key="cart" 
      overlay={cart} 
      trigger={['click']}
      placement="bottomRight"
      disabled={!cartItems}>
        <span>
          <Button className='cart-dropdown' type="text" disabled={!cartItems}>My Cart ({ cartItems })</Button>
        </span>
    </Dropdown>
  );

  return (
    <div className='header-container'>
      <Row justify='center'>
        <Col span={20}>
          <PageHeader extra={[
            <DropdownMenu key='cart'/>
          ]}/> 
        </Col>
      </Row>
      
    </div>
  );
}

export default Header;
