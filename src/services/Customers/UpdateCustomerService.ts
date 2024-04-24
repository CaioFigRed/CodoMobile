import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepository";
import { hash } from "bcryptjs";

interface ICustomerRequest {
    id: string;
    name: string;
    email: string;
    address: string;
    neighborhood: string;
    city: string;
    state: string;
}

class UpdateCustomerService {
    async execute({ id, name, email, address, neighborhood, city, state }: ICustomerRequest) {
        const customersRepository = getCustomRepository(CustomersRepositories);
        const customer = await customersRepository.findOne({
            id,
        });
        if (!customer) {
            throw new Error("Customer not exists");
        }
        customer.name = name;
        customer.email = email;
        customer.address = address;
        customer.neighborhood = neighborhood;
        customer.city = city;
        customer.state = state;
        customer.updated_at = new Date();
        await customersRepository.save(customer);
        return customer;
    }
}

export { UpdateCustomerService };
