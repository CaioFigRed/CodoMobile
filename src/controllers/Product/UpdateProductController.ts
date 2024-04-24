import { Request, Response } from "express";
import { UpdateProductService } from "../../services/Product/UpdateProductService";
class UpdateProductController {

  async handle(request: Request, response: Response) {
    const { id, name, price, description, category } = request.body;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      name,
      price,
      description,
      category
    });
 
    return response.json(product);
  }
}

export { UpdateProductController };