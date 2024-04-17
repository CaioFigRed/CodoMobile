import {Entity, PrimaryColumn, Column, CreateDateColumn, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import {SaleItem} from "./SaleItem";

  @Entity("sales")
  class Sale {

    @PrimaryColumn()
    readonly id!: string ;  

    @Column()
    totalValue!: number;

    @Column()
    discount!: number;

    @OneToMany(() => SaleItem, saleItem => saleItem.sale, { cascade: true })
    items!: SaleItem[];

    @CreateDateColumn()
    date!: Date;

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Sale };