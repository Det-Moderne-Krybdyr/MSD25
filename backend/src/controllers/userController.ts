// src/controllers/userController.ts
import { Request, Response, NextFunction } from "express";
import { listUsers } from "../services/userServices";

export async function getUsers(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await listUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}
