import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Entity()
export class SaleItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Sale, sale => sale.items, { onDelete: 'CASCADE' })
  sale: Sale;
}