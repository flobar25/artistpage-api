import { Request, Response } from "express";

export default [
  {
    path: "/users/:userId",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(`User ${req.params.userId} retrieved!`);
    }
  },
  {
    path: "/users",
    method: "post",
    handler: async (req: Request, res: Response) => {
      res.send(`User created!`);
    }
  }
];
