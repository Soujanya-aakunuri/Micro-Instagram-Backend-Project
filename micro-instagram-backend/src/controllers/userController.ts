import { Request, Response } from 'express';
import User from '../models/user';
import Post from '../models/post';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserPosts = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const posts = await Post.findAll({ where: { userId } });
  res.json(posts);
};

export const createPostForUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { title, description } = req.body;

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const post = await Post.create({ title, description, userId });
  user.postCount += 1;
  await user.save();

  res.status(201).json(post);
};
