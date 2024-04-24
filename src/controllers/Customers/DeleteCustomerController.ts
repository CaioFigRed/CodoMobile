import { Request, Response } from "express";
import { DeleteCustomerService } from "../../services/Customers/DeleteCustomerService"; 

class DeleteCustomerController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const deleteCustomerService = new DeleteCustomerService();

      const deletedCustomer = await deleteCustomerService.execute({
        id
      });

      return response.json("Registro excluído com sucesso");
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteCustomerController };
