import { Request, Response } from "express";
import { UpdateCustomerService } from "../../services/Customers/UpdateCustomerService";

class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    try {
      const { id, name, email, address, neighborhood, city, state } = request.body;
      const updateCustomerService = new UpdateCustomerService();

      const updatedCustomer = await updateCustomerService.execute({
        id,
        name,
        email,
        address,
        neighborhood,
        city,
        state
      });

      return response.json(updatedCustomer);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateCustomerController };
