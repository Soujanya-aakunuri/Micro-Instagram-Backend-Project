import { Router } from 'express';
import { getUsers, createPostForUser, getUserPosts } from '../controllers/userController';

const router = Router();

router.get('/', getUsers); // Get all users
router.get('/:userId/posts', getUserPosts); // Get all posts of a user
router.post('/:userId/posts', createPostForUser); // Create a post for a user

export default router;
