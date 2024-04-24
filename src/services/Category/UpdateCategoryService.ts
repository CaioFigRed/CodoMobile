import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";
interface ICategoryRequest {
    id: string;   name: string;
  }  
  class UpdateCategoryService {
    async execute({ id, name }: ICategoryRequest) {
      const CategoryRepository = getCustomRepository(CategoryRepositories);
      const CategoryAlreadyExists = await CategoryRepository.findOne({
        id,
      });
      if (!CategoryAlreadyExists) {
          throw new Error("Category not exists")
      }

      return await CategoryRepository.update(id,CategoryAlreadyExists)
    }
  }  
  export { UpdateCategoryService };