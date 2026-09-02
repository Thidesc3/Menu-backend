import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product';
import { UpdateProductDto } from './dto/update-product';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor( 
    @InjectRepository(Product) 
    
        private readonly productRepository: Repository<Product> 
    ) {}  

    findAll(): Promise<Product[]> {
        return this.productRepository.find({
            order: {name: 'ASC'}
        });
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.productRepository.findOneBy({id});

        if(!product) {
            throw new NotFoundException(`Categoria não encontrada!`);
        }
        
        return product;
    }

    create(dto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create({
            name: dto.name,
            active: true
        });
        return this.productRepository.save(product);
        }
    async update(id: string, dto: UpdateProductDto): Promise<Product> {
        const product = await this.findOne(id);

        if(dto.name !== undefined) {
            product.name = dto.name;
        }
            
        if(dto.active !== undefined) {
            product.active = dto.active;
        }
        return this.productRepository.save(product);
    }

    async remove(id: string): Promise<void> {
        const product = await this.findOne(id);

        await this.productRepository.remove(product);

    }
}