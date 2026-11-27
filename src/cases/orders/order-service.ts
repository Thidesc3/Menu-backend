import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order';
import { Order, OrderStatus } from './entities/order-entity';
import { OrderItem } from './entities/order-item.entity';
import { GuestCheckService } from '../guest-checks/guest-check.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductService } from '../products/product.service';
import { UpdateOrderStatusDto } from './dto/update-order-status';
@Injectable()
export class OrderService {
 constructor(private readonly guestChecks:GuestCheckService,private readonly products:ProductService,@InjectRepository(Order) private readonly orders:Repository<Order>,@InjectRepository(OrderItem) private readonly items:Repository<OrderItem>){}
 async create(dto:CreateOrderDto){const items:OrderItem[]=[];let cents=0;for(const item of dto.items){const product=await this.products.findOne(item.productId);if(!product.active)throw new BadRequestException('Produto inativo');const subtotal=Math.round(Number(product.price)*100)*item.quantity;cents+=subtotal;items.push(this.items.create({product,quantity:item.quantity,price:product.price,subtotal:subtotal/100}));}const guestCheck=await this.guestChecks.findOrCreateOpened(dto.spotId);return this.orders.save(this.orders.create({guestCheck,status:OrderStatus.NEW,total:cents/100,items}));}
 findAll(guestCheckId?:string){return this.orders.find({where:guestCheckId?{guestCheck:{id:guestCheckId}}:{},relations:{guestCheck:{spot:true},items:{product:true}},order:{createdAt:'ASC'}});}
 async findOne(id:string){const row=await this.orders.findOne({where:{id},relations:{guestCheck:{spot:true},items:{product:true}}});if(!row)throw new NotFoundException('Pedido não encontrado');return row;}
 async updateStatus(id:string,dto:UpdateOrderStatusDto){await this.findOne(id);await this.orders.update(id,{status:dto.status});return this.findOne(id);}
}
