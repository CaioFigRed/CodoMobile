import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository"; // Corrigido o nome do repositório

interface ICategoryDelete {
    id: string;
}

class DeleteCategoryService {
    async execute({ id }: ICategoryDelete) {
        const categoriesRepository = getCustomRepository(CategoryRepository);
        const category = await categoriesRepository.findOne(id);

        if (!category) {
            throw new Error("Category not found");
        }

        await categoriesRepository.remove(category);
        return category;
    }
}

export { DeleteCategoryService };
