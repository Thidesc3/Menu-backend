import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({length: 60, nullable: false})
    name!: string;

    @Column({type: 'boolean', default: true})
    active!: boolean;


    @Column ({type : 'text', nullable: true})
    description: string;

    @Column ({type : 'numeric', precision: 10, scale: 2})
    price: number;

    @Column ({type : 'text', nullable: true})
    picture: string; 


    //Product
    @ManyToOne(() => Product, (product) => product.products)
    @JoinColumn({ name: 'product_id' })
    product: Product | null;
}