import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accountsService";

const Controller = exports.Router();

Controller.get("/member", getAllAccount);
Controller.post("/regismember", createAccount);
// Controller.patch("/regismember/:id", updateAccount);
// Controller.delete("/regismember/:id", deleteAccount);

export default Controller;
