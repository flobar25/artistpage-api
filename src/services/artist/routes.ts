import { Request, Response } from "express";
import { persistenceService } from "../../persistence/persitence-service";

export default [
  {
    path: "/artists/:artistId",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(`Artist ${req.params.artistId} retrieved!`);
    }
  },
  {
    path: "/artists",
    method: "post",
    handler: async (req: Request, res: Response) => {
      console.log(JSON.stringify(req.body));
      persistenceService.createArtist(req.body);
      res.send("Artist created!");
    }
  },
  {
    path: "/artists/:artistId/entries/:entryId",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(`Entry ${req.params.entryId} retrieved!`);
    }
  },
  {
    path: "/artists/:artistId/entries",
    method: "post",
    handler: async (req: Request, res: Response) => {
      res.send("Entry created!");
    }
  }
];
