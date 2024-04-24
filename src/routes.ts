import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController} from "./controllers/UpdateUserController";
import { DeleteUserController} from "./controllers/DeleteUserController";
import { CreateCategoryController} from "./controllers/Category/CreateCategoryController";

import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ensureAuthenticated} from "./midleware/ensureAuthenticated";
import { CreateSaleController} from "./controllers/Sale/CreateSaleController";
import {ListSaleController} from "./controllers/Sale/ListSaleController";
import {DeleteSaleController} from "./controllers/Sale/DeleteSaleController";
import {UpdateSaleController} from "./controllers/Sale/UpdateSaleController";
import {CreateCustomerController} from "./controllers/Customers/CreateCustomerController";
import {ListCustomersController} from "./controllers/Customers/ListCustomerController";
import {DeleteCustomerController} from "./controllers/Customers/DeleteCustomerController";
import {UpdateCustomerController} from "./controllers/Customers/UpdateCustomerController";
/*
import { ensureAdmin} from "./middlewares/ensureAdmin";

*/
const createSaleController  = new CreateSaleController();
const createCategoryController = new CreateCategoryController();
const authenticationUserController  = new AuthenticateUserController();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const listSaleController  = new ListSaleController();
const deleteSaleController  = new DeleteSaleController();
const updateSaleController  = new UpdateSaleController();

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomersController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
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

router.post("/customer", createCustomerController.handle);
router.get("/customer", listCustomerController.handle);
router.delete("/customer/:id", deleteCustomerController.handle);
router.put("/customer", updateCustomerController.handle);

router.post("/category", createCategoryController.handle);

/*

router.get("/users",  ensureAuthenticated,ensureAdmin,listUsersController.handle);


*/
export {router}