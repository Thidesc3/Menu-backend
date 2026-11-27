import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { GuestCheck } from '../../guest-checks/guest-check.entity';
export enum OrderStatus { NEW='NEW',PREPARING='PREPARING',READY='READY',DELIVERED='DELIVERED' }
@Entity('order')
export class Order {
 @PrimaryGeneratedColumn('uuid') id:string;
 @CreateDateColumn({name:'created_at'}) createdAt:Date;
 @ManyToOne(()=>GuestCheck,g=>g.orders,{nullable:false}) @JoinColumn({name:'guest_check_id'}) guestCheck:GuestCheck;
 @Column({type:'numeric',precision:10,scale:2}) total:number;
 @Column({type:'enum',enum:OrderStatus,default:OrderStatus.NEW}) status:OrderStatus;
 @OneToMany(()=>OrderItem,i=>i.order,{cascade:true}) items:OrderItem[];
}
