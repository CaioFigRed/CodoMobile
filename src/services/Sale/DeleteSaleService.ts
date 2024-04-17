import { getCustomRepository } from "typeorm";
import {SaleRepository} from "../../repositories/SaleRepository";

interface ISaleDelete {
    id: string;
}

class DeleteSaleService {

  async execute({id}:ISaleDelete) {

      const saleRepository = getCustomRepository(SaleRepository);

      return await saleRepository.delete(id);

  }
}

export { DeleteSaleService };