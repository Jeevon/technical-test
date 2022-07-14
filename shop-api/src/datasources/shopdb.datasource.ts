import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// Credentials is to be hidden
// currently inputed here for app simplicity
const config = {
  name: 'shopdb',
  connector: 'mongodb',
  url: '',
  host: 'db',
  port: 27017,
  user: 'jeevon',
  password: 'password',
  database: 'shopdb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ShopdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'shopdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.shopdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
