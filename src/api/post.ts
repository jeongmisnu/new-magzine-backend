import { Router } from 'express';

const router = Router();

router.post('/post');

router.get('/post');

router.put('/post/:id');

router.delete('/post/:id');

export default router;
