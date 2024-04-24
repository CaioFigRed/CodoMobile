
import { ProductRepositories } from "../../repositories/ProductRepositories";
import { getCustomRepository } from "typeorm";
interface IProductRequest {   name: string;
  price: number;   description: string;  category: string; }
class CreateProductService {
  async execute({ name, price, description, category}: IProductRequest) {

    const productRepository = getCustomRepository(ProductRepositories);
    const productAlreadyExists = await productRepository.findOne({
      name,
    });
    if (productAlreadyExists) {
      throw new Error("Product already exists");
    }
    const user = productRepository.create({  name, price, description, category  });
    await productRepository.save(user);
    return user;
  }
}
export { CreateProductService };
