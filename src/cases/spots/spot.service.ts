import { Repository } from 'typeorm';
import { Spot } from './spot.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot';
import { UpdateSpotDto } from './dto/update-spot';
@Injectable()
export class SpotService {
 constructor(@InjectRepository(Spot) private readonly repo:Repository<Spot>){}
 findAll(){return this.repo.find({order:{name:'ASC'}});}
 async findOne(id:string){const row=await this.repo.findOneBy({id});if(!row)throw new NotFoundException('Mesa não encontrada');return row;}
 create(dto:CreateSpotDto){return this.repo.save(this.repo.create(dto));}
 async update(id:string,dto:UpdateSpotDto){return this.repo.save(Object.assign(await this.findOne(id),dto));}
 async remove(id:string){await this.repo.remove(await this.findOne(id));}
}
