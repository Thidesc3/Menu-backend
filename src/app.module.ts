import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './cases/products/product.module';
import { CategoryyModule } from './cases/categories/category.module';
import { SpotModule } from './cases/spots/spot.module';
import { GuestCheckModule } from './cases/guest-checks/guest-check.module';
import { OrderModule } from './cases/orders/order.module';
@Module({imports:[ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRootAsync({inject:[ConfigService],useFactory:(config:ConfigService)=>{const url=config.get<string>('DATABASE_URL');if(!url)throw new Error('DATABASE_URL não configurada');return {type:'postgres',url,schema:config.get<string>('DATABASE_SCHEMA','public'),autoLoadEntities:true,synchronize:true,ssl:false};}}),CategoryyModule,ProductModule,SpotModule,GuestCheckModule,OrderModule]})
export class AppModule {}
