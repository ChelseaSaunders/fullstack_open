import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const PORT = 5050;

const add = (a: number, b: number): number => a + b;

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  console.log(add(1, 3));
  res.send('hello');
});

app.listen(PORT, () => console.log(`Server running`));
