import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Category } from '../category/category.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 60,
  })
  name!: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  active!: boolean;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  price!: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  picture?: string;

  @ManyToOne(
    () => Category,
    (category) => category.products,
    {
      nullable: true,
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({
    name: 'category_id',
  })
  category?: Category;
}