import express from "express";
import { CreateUser } from "controllers/users.controller";

const route = express.Router();

route.post("/user", CreateUser);

export default route;
