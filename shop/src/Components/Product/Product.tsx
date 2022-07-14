import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../App';
import {
    Row,
    Col,
    Image,
    Typography,
    Space,
    Button,
    notification,
    Empty
} from 'antd';
import axios, { AxiosResponse } from 'axios';
import './Product.css';
import { IProduct, ISizeOptions } from '../../types';
import { ICartProduct } from '../../types/cart';

const { Link, Title, Paragraph } = Typography;

enum NotificationType {
    INFO = 'info',
    ERROR = 'error',
}

function Product() {

    const { products, setLoadCart } = useContext(CartContext);
    const [size, setSize] = useState<ISizeOptions | null>(null);
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        axios.get('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product')
            .then(response => {
                setProduct(response.data);
            });
    }, []);

    const notify = (type: NotificationType, message?: string) => {
        const placement = 'bottomLeft';
        switch(type) {
            case NotificationType.ERROR:
                notification.error({
                    message: message || 'Please select a size before adding it to cart',
                    placement 
                })
                break;
            default:
                notification.info({
                    message: `${product?.title} with the size of '${size?.label}' has been added to cart`,
                    placement
                })
                break;
        }
    }

    const apiResponseCallback = (response: AxiosResponse) => {
        const success = [200, 204];
        if (success.includes(response.status)) {
            notify(NotificationType.INFO);
            setLoadCart(true);
            setSize(null);
        } else {
            notify(NotificationType.ERROR, response.statusText);
        }
    }

    const addToCartHandler = async () => {
        if (size && product) {
            const baseUrl = 'http://localhost:3000/cart-items';

            let item: ICartProduct = products?.[`${product.id}:${size.id}`];
            if (item) {
                item.quantity++;
                await axios.patch(`${baseUrl}/${item.id}`, { quantity: item.quantity }).then(apiResponseCallback)
            } else {
                await axios.post(baseUrl, {
                    productId: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    imageUrl: product.imageURL,
                    sizeId: size.id,
                    size: size.label,
                    quantity: 1,
                }).then(apiResponseCallback)
            }
        } else {
            notify(NotificationType.ERROR);
        }
    }

    const sizeSelectionHandler = (opt: ISizeOptions) => {
        if (opt.label === size?.label) {
            setSize(null);
        } else {
            setSize(opt);
        }
    }

    const sizeSelections = () => {
        if (!product) return [];        

        return product.sizeOptions.map((opt) => (
            <Link 
                key={opt.id}
                className={opt.label === size?.label ? 'active-selection' : ''}
                onClick={(e) => { 
                    sizeSelectionHandler(opt) 
                    e.preventDefault();
                }}
            >{opt.label}</Link>
        ));
    };

    return product ? ( 
        <Row className='product-container' 
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}>
            <Col className='product-img-container gutter-row' span={11}>
                <Image
                    src={product.imageURL}
                    fallback="data:image/png;base64,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"
                />
            </Col>
            <Col className='product-info-container gutter-row' offset={3} span={10}>
                <Title
                    className='product-title'
                    level={4}
                    >
                  { product.title }
                </Title>
                <Title
                    className='product-price'
                    level={5}
                    >
                  ${ product.price.toFixed(2) }
                </Title>
                <Paragraph
                    className='product-description'>
                    { product.description }
                </Paragraph>
                <Paragraph
                    className='product-size'>
                        SIZE<span className='required'>*</span> <span className='selected-size'>{ size?.label }</span>
                </Paragraph>
            
                <Space
                    size='middle'
                    direction='vertical'
                    >
                    <Space 
                        className='size-selection'
                        size='small'
                        direction='horizontal'>
                        { sizeSelections() } 
                    </Space>

                    <Button 
                        size='large'
                        className='add-to-cart'
                        onClick={addToCartHandler}
                        >
                        ADD TO CART
                    </Button>
                </Space>
            </Col>
        </Row>
    ) : <Empty />;
}

export default Product;