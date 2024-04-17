import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController} from "./controllers/UpdateUserController";
import { DeleteUserController} from "./controllers/DeleteUserController";
import { CreateSaleController} from "./controllers/Sale/CreateSaleController";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ensureAuthenticated} from "./midleware/ensureAuthenticated";
import {ListSaleController} from "./controllers/Sale/ListSaleController";
import {DeleteSaleController} from "./controllers/Sale/DeleteSaleController";
import {UpdateSaleController} from "./controllers/Sale/UpdateSaleController";
/*
import { ensureAdmin} from "./middlewares/ensureAdmin";

*/
const createSaleController  = new CreateSaleController();
const authenticationUserController  = new AuthenticateUserController();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const listSaleController  = new ListSaleController();
const deleteSaleController  = new DeleteSaleController();
const updateSaleController  = new UpdateSaleController();

const router = Router();

router.post("/login", authenticationUserController.handle);
router.post("/users", createUserController.handle);

router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

router.post("/sales", createSaleController.handle);
router.get("/sales", listSaleController.handle);
router.delete("/sales/:id", deleteSaleController.handle);
router.put("/sales", updateSaleController.handle);

/*

router.get("/users",  ensureAuthenticated,ensureAdmin,listUsersController.handle);


*/
export {router}