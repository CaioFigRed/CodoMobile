import { Request, Response } from "express";
import { CreateCustomerService } from "../../services/Customers/CreateCustomerService";

class CreateCustomerController {
    async handle(request: Request, response: Response) {
        try {
            const { name, cpf, email, address, neighborhood, city, state } = request.body;
            const createCustomerService = new CreateCustomerService();

            const customer = await createCustomerService.execute({
                name,
                cpf,
                email,
                address,
                neighborhood,
                city,
                state
            });

            return response.json(customer);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { CreateCustomerController };
