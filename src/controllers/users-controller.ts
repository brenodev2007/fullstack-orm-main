import { Request, Response } from "express";
import { prisma } from "@/prisma";

class UsersController {
  async index(request: Request, response: Response) {
    const user = await prisma.user.findMany();
    return response.json(user);
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    await prisma.user.create({ data: { name, email } });
    return response.status(201).json();
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const user = await prisma.user.findUnique({ where: { id } });
    return response.json();
  }
}

export { UsersController };
