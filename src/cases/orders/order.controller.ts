import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { OrderService } from './order-service';
import { CreateOrderDto } from './dto/create-order';
import { UpdateOrderStatusDto } from './dto/update-order-status';
@Controller('orders')
export class OrderController {
 constructor(private readonly service:OrderService){}
 @Post() create(@Body() dto:CreateOrderDto){return this.service.create(dto);}
 @Get() findAll(@Query('guestCheckId',new ParseUUIDPipe({optional:true})) id?:string){return this.service.findAll(id);}
 @Get(':id') findOne(@Param('id',ParseUUIDPipe) id:string){return this.service.findOne(id);}
 @Patch(':id/status') updateStatus(@Param('id',ParseUUIDPipe) id:string,@Body() dto:UpdateOrderStatusDto){return this.service.updateStatus(id,dto);}
}
