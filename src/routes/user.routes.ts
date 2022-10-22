import express from "express";
import { DoLogin } from "controllers/auth.controller";
import { AuthMiddleware } from "middlewares/auth.middleware";
import { CreateUser, ReadUser, ReadAllUsers, UpdateUser, DeleteUser } from "../controllers/users.controller";

const route = express.Router();

route.post("/login", DoLogin);
route.post("/user/create", CreateUser);
route.get("/user/read", AuthMiddleware, ReadUser);
route.get("/users/read", AuthMiddleware, ReadAllUsers);
route.patch("/user/update", AuthMiddleware, UpdateUser);
route.delete("/user/delete", AuthMiddleware, DeleteUser);

export default route;


