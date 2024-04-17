import { getCustomRepository } from "typeorm";
import {SaleRepository} from "../../repositories/SaleRepository";

  interface ISaleRequest {
    id: string;
    discount: number;
  }

class UpdateSaleService {
  async execute({ id, discount }: ISaleRequest) {
    const saleRepository = getCustomRepository(SaleRepository);
    const saleAlreadyExists = await saleRepository.findOne({ id }, { relations: ["items"] });

    if (!saleAlreadyExists) {
      throw new Error("Sale not exists");
    }

    let totalValue = 0;

    if (Array.isArray(saleAlreadyExists.items)) {
      for (const item of saleAlreadyExists.items) {
        totalValue += item.price * item.quantity;
      }
    }

    saleAlreadyExists.discount = discount;
    saleAlreadyExists.totalValue = totalValue - discount;

    return await saleRepository.save(saleAlreadyExists);
  }
}

  export { UpdateSaleService };