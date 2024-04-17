import { Request, Response } from "express";
import {ListSaleService} from "../../services/Sale/ListSaleService";

class ListSaleController {
  async handle(request: Request, response: Response) {
    const listSaleService = new ListSaleService();

    const sales = await listSaleService.execute();

    return response.json(sales);
  }
}

export { ListSaleController };