import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Category } from '../categories/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product';
import { UpdateProductDto } from './dto/update-product';
@Injectable()
export class ProductService {
 constructor(@InjectRepository(Category) private readonly categories:Repository<Category>,@InjectRepository(Product) private readonly products:Repository<Product>){}
 findAll(){return this.products.find({order:{name:'ASC'},relations:{category:true}});}
 async findOne(id:string){const p=await this.products.findOne({where:{id},relations:{category:true}});if(!p)throw new NotFoundException('Produto não encontrado');return p;}
 private async category(id?:string){if(!id)return null;const c=await this.categories.findOneBy({id});if(!c)throw new NotFoundException('Categoria não encontrada');return c;}
 async create(dto:CreateProductDto){const {categoryId,...fields}=dto;return this.products.save(this.products.create({...fields,category:await this.category(categoryId)}));}
 async update(id:string,dto:UpdateProductDto){const p=await this.findOne(id);const {categoryId,...fields}=dto;Object.assign(p,fields);if(categoryId!==undefined)p.category=await this.category(categoryId);return this.products.save(p);}
 async remove(id:string){await this.products.remove(await this.findOne(id));}
}
