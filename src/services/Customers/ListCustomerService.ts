import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepository";

class ListCustomerService {
  async execute() {
    const customersRepository = getCustomRepository(CustomersRepositories);
    const customers = await customersRepository.find();
    return customers;
  }
}

export { ListCustomerService };
