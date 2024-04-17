import { Request, Response } from "express";
import {DeleteSaleService} from "../../services/Sale/DeleteSaleService";

class DeleteSaleController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const deleteSaleService = new DeleteSaleService();

   await deleteSaleService.execute({id});

   return response.json("Registro excluido com sucesso");
  }
}

export { DeleteSaleController };