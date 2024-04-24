import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";

class ListCategoryService {
  async execute() {
    const categoryRepositories = getCustomRepository(CategoryRepository);

    const category = await categoryRepositories.find();

    return category;
  }
}

export { ListCategoryService };