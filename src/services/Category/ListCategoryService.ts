import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class ListCategoryService {
  async execute() {
    const categoryRepositories = getCustomRepository(CategoryRepositories);

    const category = await categoryRepositories.find();

    return category;
  }
}

export { ListCategoryService };