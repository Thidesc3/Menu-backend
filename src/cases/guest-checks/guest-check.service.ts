import { Repository } from 'typeorm';
import { GuestCheck, GuestCheckStatus } from './guest-check.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuestCheckDto } from './dto/create-guest-check';
import { Spot } from '../spots/spot.entity';
@Injectable()
export class GuestCheckService {
 constructor(@InjectRepository(GuestCheck) private readonly repo:Repository<GuestCheck>,@InjectRepository(Spot) private readonly spots:Repository<Spot>){}
 async create(dto:CreateGuestCheckDto){const spot=await this.spots.findOneBy({id:dto.spotId,active:true});if(!spot)throw new NotFoundException('Mesa ativa não encontrada');if(await this.findOpenedBySpotId(spot.id))throw new ConflictException('Mesa já possui comanda aberta');return this.repo.save(this.repo.create({spot,status:GuestCheckStatus.OPENED}));}
 async findOne(id:string){const row=await this.repo.findOne({where:{id},relations:{spot:true,orders:true}});if(!row)throw new NotFoundException('Comanda não encontrada');return row;}
 private withTotal(row:GuestCheck){const {orders,...rest}=row;return {...rest,total:Math.round((orders??[]).reduce((sum,o)=>sum+Number(o.total),0)*100)/100};}
 async findAll(status?:GuestCheckStatus){return (await this.repo.find({where:status?{status}:{},relations:{spot:true,orders:true},order:{createdAt:'ASC'}})).map(row=>this.withTotal(row));}
 async findDetail(id:string){return this.withTotal(await this.findOne(id));}
 async close(id:string){const row=await this.findOne(id);if(row.status===GuestCheckStatus.CLOSED)throw new BadRequestException('Comanda já fechada');row.status=GuestCheckStatus.CLOSED;return this.repo.save(row);}
 findOpenedBySpotId(spotId:string){return this.repo.findOne({where:{spot:{id:spotId},status:GuestCheckStatus.OPENED},relations:{spot:true}});}
 async findOrCreateOpened(spotId:string){return (await this.findOpenedBySpotId(spotId))??this.create({spotId});}
}
