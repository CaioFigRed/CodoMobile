import { CategoryRepository } from "../../repositories/CategoryRepositories";
import { getCustomRepository } from "typeorm";
import { Category } from "../../entities/Category";

interface ICategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: ICategoryRequest) {

    const categoryRepository = getCustomRepository(CategoryRepository); // Linha corrigida

    const category = categoryRepository.create({ name });
    await categoryRepository.save(category);
    return category;
  }
}
export { CreateCategoryService };