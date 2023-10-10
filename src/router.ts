import express,{Request, Response} from 'express';
import { connectionToMongo } from './infrastructure/repositories/database/MongoDB/mongo.connection';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get("/mongo", (req: Request, res: Response) => {
  connectionToMongo();
  res.send("Hello Mongo!");
  });

export default router;