import { Request, Response } from "express";
import {CreateSaleService} from "../../services/Sale/CreateSaleService";

class CreateSaleController {
  async handle(request: Request, response: Response) {
   const { saleItems, discount } = request.body;
   const createSaleService = new CreateSaleService();

   const sale = await createSaleService.execute({
       customerName: "",
       saleItems,
       discount
   });
 
    return response.json(sale);
  }
}

export { CreateSaleController };