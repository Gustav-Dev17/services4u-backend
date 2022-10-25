import express from "express";
import { DoLogin } from "controllers/auth.controller";
import { AuthMiddleware } from "middlewares/auth.middleware";
import { CreateUser, ReadUser, ReadAllUsers, UpdateUser, DeleteUser } from "../controllers/users.controller";
import { CreateService, ReadService, ReadAllServices, ReadServicesByUser, UpdateService, DeleteService } from "../controllers/services.controller";

const route = express.Router();

route.post("/login", DoLogin);
route.post("/user/create", CreateUser);
route.get("/user/read", AuthMiddleware, ReadUser);
route.get("/users/read", AuthMiddleware, ReadAllUsers);
route.patch("/user/update", AuthMiddleware, UpdateUser);
route.delete("/user/delete", AuthMiddleware, DeleteUser);

route.post("/service/create", AuthMiddleware, CreateService);
route.get("/service/:id", AuthMiddleware, ReadService);
route.get("/services", AuthMiddleware, ReadAllServices); //query example to paginate: ?page=2
route.get("/user/services", AuthMiddleware, ReadServicesByUser); //query example to paginate: ?page=2
route.patch("/service/:id", AuthMiddleware, UpdateService);
route.delete("/service/:id", AuthMiddleware , DeleteService);

export default route;
