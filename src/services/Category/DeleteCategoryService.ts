import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";
interface ICategoryDelete {
    id: string;
}
class DeleteCategoryService {
  async execute({id}:ICategoryDelete) {
      const CategoryRepository = getCustomRepository(CategoryRepositories);
      const CategoryAlreadyExists = await CategoryRepository.findOne({
        id,
      });

      if (!CategoryAlreadyExists) {
          throw new Error("Category not exists");
      }
      return await CategoryRepository.delete(id);
  }
}
export { DeleteCategoryService };