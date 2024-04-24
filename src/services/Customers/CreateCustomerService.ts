import { hash } from "bcryptjs";
import { CustomersRepositories } from "../../repositories/CustomersRepository";
import { getCustomRepository } from "typeorm";

interface ICustomerRequest {
  name: string;
  cpf: string;
  email: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
}

class CreateCustomerService {
  async execute({
    name,
    cpf,
    email,
    address,
    neighborhood,
    city,
    state
  }: ICustomerRequest) {

    if (!email) {
      throw new Error("Email incorreto");
    }

    const customersRepository = getCustomRepository(CustomersRepositories);
    const customerAlreadyExists = await customersRepository.findOne({
      email,
    });

    if (customerAlreadyExists) {
      throw new Error("Customer already exists");
    }

    const customer = customersRepository.create({
      name,
      cpf,
      email,
      address,
      neighborhood,
      city,
      state,
    });

    await customersRepository.save(customer);
    return customer;
  }
}

export { CreateCustomerService };
