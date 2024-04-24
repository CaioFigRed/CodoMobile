import { Request, Response } from "express";
import { ListCustomerService } from "../../services/Customers/ListCustomerService"; 

class ListCustomersController {
  async handle(request: Request, response: Response) {
    try {
      const listCustomerService = new ListCustomerService();

      const customers = await listCustomerService.execute();

      return response.json(customers);
    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}

export { ListCustomersController };
