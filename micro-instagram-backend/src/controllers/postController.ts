import { Request, Response } from 'express';
import Post from '../models/post';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await Post.findAll();
  res.json(posts);
};

export const updatePost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  const { title, description } = req.body;

  const post = await Post.findByPk(postId);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  post.title = title || post.title;
  post.description = description || post.description;
  await post.save();

  res.json(post);
};

export const deletePost = async (req: Request, res: Response) => {
  const { postId } = req.params;

  const post = await Post.findByPk(postId);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  await post.destroy();
  res.status(204).send();
};
