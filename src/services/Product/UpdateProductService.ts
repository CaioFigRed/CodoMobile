import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";
interface IProductRequest {
    id: string;   name: string;     price: number; description: string; category: string;
  }  
  class UpdateProductService {
    async execute({ id, name, price, description, category }: IProductRequest) {
      const productRepository = getCustomRepository(ProductRepositories);
      const productAlreadyExists = await productRepository.findOne({
        id,
      });
      if (!productAlreadyExists) {
          throw new Error("Product not exists")
      }

      productAlreadyExists.name=name,
      productAlreadyExists.price=price,
      productAlreadyExists.description=description,
      productAlreadyExists.category=category

      return await productRepository.update(id,productAlreadyExists)
    }
  }  
  export { UpdateProductService };