import express from "express";
import { CreateUser, ReadUser, ReadAllUsers, UpdateUser, DeleteUser } from "../controllers/users.controller";

const route = express.Router();

route.post("/user/create", CreateUser);
route.get("/user/read/:id", ReadUser);
route.get("/users/read", ReadAllUsers);
route.patch("/user/update/:id", UpdateUser);
route.delete("/user/delete/:id", DeleteUser);

export default route;


