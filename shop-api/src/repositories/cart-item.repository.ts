import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShopdbDataSource} from '../datasources';
import {CartItem, CartItemRelations} from '../models';

export class CartItemRepository extends DefaultCrudRepository<
  CartItem,
  typeof CartItem.prototype.id,
  CartItemRelations
> {
  constructor(
    @inject('datasources.shopdb') dataSource: ShopdbDataSource,
  ) {
    super(CartItem, dataSource);
  }
}
