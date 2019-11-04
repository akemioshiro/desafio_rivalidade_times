import { Request,Response } from "express";

export class AppService {
  public rivalryLevel(req: Request, res: Response) {
    req;
    return res.status(200).send("checa grau de rivalidade");
  }
}