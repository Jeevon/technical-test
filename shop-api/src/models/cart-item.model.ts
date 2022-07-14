import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class CartItem extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  productId: number;

  @property({
    type: 'number',
    required: true,
  })
  sizeId: number;

  @property({
    type: 'string',
    required: true,
  })
  size: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  imageUrl: string;

  @property({
    type: 'date',
    default: new Date()
  })
  createdAt: string;

  @property({
    type: 'date',
    default: new Date()
  })
  updatedAt: string;


  constructor(data?: Partial<CartItem>) {
    super(data);
  }
}

export interface CartItemRelations {
  // describe navigational properties here
}

export type CartItemWithRelations = CartItem & CartItemRelations;
