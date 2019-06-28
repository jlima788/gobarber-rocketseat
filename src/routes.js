import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Everaldo Lima',
    email: 'jemlima@gmail.com',
    password_hash: '321354687987984',
  });
  return res.json(user);
});

export default routes;
