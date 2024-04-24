import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("category")
class Category {
    @PrimaryColumn()
    readonly id!: string ;
    @Column()
    name!: string;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Category };