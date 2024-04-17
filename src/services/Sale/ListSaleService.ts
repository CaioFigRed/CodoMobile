import {getCustomRepository} from "typeorm";
import {SaleRepository} from "../../repositories/SaleRepository";

class ListSaleService {
  async execute() {
    const saleRepository = getCustomRepository(SaleRepository);

    return await saleRepository.find({ relations: ["items"] });
  }
}

export { ListSaleService };