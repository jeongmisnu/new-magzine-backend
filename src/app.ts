import express, { Request, Response, NextFunction } from 'express';
import post from './api/post';

const app = express();

app.use(express.json());
app.use('/api', post);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
	next();
});

app.listen(5000, () => {
	console.log('5000 서버가 켜졌습니다.');
});
