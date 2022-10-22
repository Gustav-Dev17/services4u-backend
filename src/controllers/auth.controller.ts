import { Request, Response } from "express";
import { LoginService } from "services/auth.services";

export const DoLogin = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  try {
    const token = await LoginService(email, password);
    return res.status(200).json({ token: token });
  } catch (e) {
    return res.status(401).json({ message: "Erro ao tentar logar o usuário!", descripton: (e as Error).message });
  }
};
