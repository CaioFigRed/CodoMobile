import { Request, Response } from "express";
import { CreateProductService } from "../../services/Product/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
   const { name, price, description, category } = request.body;
   const createProductService = new CreateProductService();
   const product = await createProductService.execute({
     name,
    price,
       description,
       category
   });
 
    return response.json(product);
  }
}

export { CreateProductController };