import { Request, Response } from "express";
import { persistenceService } from "../../persistence/persitence-service";

export default [
  {
    path: "/artists/:artistId",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await persistenceService.readArtist(req.params.artistId);
      console.log(result);
      res.status(result ? 200 : 404).send(result);
    }
  },
  {
    path: "/artists",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const result = await persistenceService.createArtist(req.body);
      res
        .header("location", `artists/${result}`)
        .status(201)
        .send();
    }
  },
  {
    path: "/artists",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await persistenceService.readArtists();
      res.status(200).send(result);
    }
  }
];
