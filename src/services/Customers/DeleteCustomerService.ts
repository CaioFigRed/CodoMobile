import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepository";

interface ICustomerDelete {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: ICustomerDelete) {
        const customersRepository = getCustomRepository(CustomersRepositories);
        const customer = await customersRepository.findOne(id);

        if (!customer) {
            throw new Error("Customer not found");
        }

        await customersRepository.remove(customer);
        return customer;
    }
}

export { DeleteCustomerService };
