import express,{Request, Response} from 'express';
import { connectionToMongo } from './infrastructure/repositories/database/MongoDB/mongo.connection';
import { getUserController } from './use-cases/getUser/GetUserConfig';
import { createUserController } from './use-cases/createUser/CreateUserConfig';
import { createPostController } from './use-cases/createPost/CreatePostConfig';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get("/mongo", (req: Request, res: Response) => {
  connectionToMongo();
  res.send("Hello Mongo!");
  });

router.get("/users", (req: Request, res: Response) => {
  getUserController.handle();
  res.status(200).send({message: "Lista de usuários obtidas com sucesso!"});
})

router.post("/users", (req: Request, res: Response) => {
  createUserController.handle(req, res);
  res.status(201).send({message: "Usuário criado com sucesso!"});
})

router.post("/posts", (req: Request, res: Response) => {
  createPostController.handle(req, res);
  res.status(201).send({message: "Post criado com sucesso!"});
})

export default router;