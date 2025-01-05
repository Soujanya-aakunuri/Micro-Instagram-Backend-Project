import { Router } from 'express';
import { getAllPosts, updatePost, deletePost } from '../controllers/postController';

const router = Router();

router.get('/', getAllPosts); // Get all posts
router.put('/:postId', updatePost); // Update a post
router.delete('/:postId', deletePost); // Delete a post

export default router;
