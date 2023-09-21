import { Request, Response } from "express";
import ad  from "../Entities/ad";

const adsController = {
  read: async (_req: Request, res: Response) => {
    try {
      const result = await ad.find();
      res.send(result);
    } catch (err) {
      res.send("There has been an error while reading the ads");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const ad = req.body;
      console.log(ad)
      /*
      const newAd = new Ad();
      newAd.title = req.body.title;
      newAd.price = req.body.price;
      newAd.description = req.body.description;
      await newAd.save();
      */

      await ad.save(req.body);
      res.send("Ad has been created");
    } catch (err) {
      res.send("An error occured while creating the ad");
    }
  },
  delete: (_req: Request, _res: Response) => {},
  put: (_req: Request, _res: Response) => {},
};

export default adsController;