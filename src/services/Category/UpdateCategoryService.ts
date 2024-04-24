import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";
interface ICategoryRequest {
    id: string;   name: string;
  }  
  class UpdateCategoryService {
    async execute({ id, name }: ICategoryRequest) {
      const categoryRepository = getCustomRepository(CategoryRepository);
      const categoryAlreadyExists = await categoryRepository.findOne({
        id,
      });
      if (!categoryAlreadyExists) {
          throw new Error("Category not exists")
      }

      return await categoryRepository.update(id,categoryAlreadyExists)
    }
  }  
  export { UpdateCategoryService };