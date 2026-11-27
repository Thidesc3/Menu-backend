import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category';
import { UpdateCategoryDto } from './dto/update-category';
@Injectable()
export class CategoryService {
 constructor(@InjectRepository(Category) private readonly repo:Repository<Category>){}
 findAll(){return this.repo.find({order:{displayOrder:'ASC',name:'ASC'}});}
 async findOne(id:string){const row=await this.repo.findOneBy({id});if(!row)throw new NotFoundException('Categoria não encontrada');return row;}
 create(dto:CreateCategoryDto){return this.repo.save(this.repo.create(dto));}
 async update(id:string,dto:UpdateCategoryDto){return this.repo.save(Object.assign(await this.findOne(id),dto));}
 async remove(id:string){await this.repo.remove(await this.findOne(id));}
}
