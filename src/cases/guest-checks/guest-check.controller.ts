import { Body, Controller, Get, Param, ParseEnumPipe, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { GuestCheckService } from './guest-check.service';
import { GuestCheckStatus } from './guest-check.entity';
import { CreateGuestCheckDto } from './dto/create-guest-check';
@Controller('guest-checks')
export class GuestCheckController {
 constructor(private readonly service:GuestCheckService){}
 @Get() findAll(@Query('status',new ParseEnumPipe(GuestCheckStatus,{optional:true})) status?:GuestCheckStatus){return this.service.findAll(status);}
 @Get(':id') findOne(@Param('id',ParseUUIDPipe) id:string){return this.service.findDetail(id);}
 @Post() create(@Body() dto:CreateGuestCheckDto){return this.service.create(dto);}
 @Patch([':id/close',':id']) close(@Param('id',ParseUUIDPipe) id:string){return this.service.close(id);}
}
