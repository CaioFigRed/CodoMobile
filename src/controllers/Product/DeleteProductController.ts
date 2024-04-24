import { Request, Response } from "express";
import { DeleteProductService } from "../../services/Product/DeleteProductService";
class DeleteProductController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const deleteUserService= new DeleteProductService();

   const msg = await deleteUserService.execute({
     id
   });

   return response.json("Registro excluido com sucesso");
  }
}

export { DeleteProductController };