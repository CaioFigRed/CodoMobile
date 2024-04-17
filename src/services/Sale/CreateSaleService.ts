import { SaleRepository } from "../../repositories/SaleRepository";
import { getCustomRepository } from "typeorm";
import {SaleItem} from "../../entities/SaleItem";

  interface ISaleItemRequest {
    productName: string;
    price: number;
    quantity: number;
  }

  interface ISaleRequest {
    customerName: string;
    saleItems: ISaleItemRequest[];
    discount: number;
  }

class CreateSaleService {
  async execute({ saleItems, discount }: ISaleRequest) {
    const saleRepository = getCustomRepository(SaleRepository);

    let totalValue = 0;
    const items: SaleItem[] = [];

    for (const item of saleItems) {
      const itemTotal = item.price * item.quantity;
      totalValue += itemTotal;

      const saleItem = new SaleItem();
      saleItem.productName = item.productName;
      saleItem.price = item.price;
      saleItem.quantity = item.quantity;
      items.push(saleItem);
    }

    const discountedValue = totalValue - discount;

    const sale = saleRepository.create({
      items,
      discount,
      totalValue: discountedValue,
    });

    await saleRepository.save(sale);

    return sale;
  }
}

export { CreateSaleService };
