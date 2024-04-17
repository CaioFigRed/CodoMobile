import { Request, Response } from "express";
import { UpdateSaleService } from "../../services/Sale/UpdateSaleService";

class UpdateSaleController {

  async handle(request: Request, response: Response) {
    const { id, discount } = request.body;

    const updateSaleService = new UpdateSaleService();

    const user = await updateSaleService.execute({id, discount});
 
    return response.json(user);
  }
}

export { UpdateSaleController };