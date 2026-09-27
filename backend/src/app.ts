import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createAuthRouter } from './routes/auth';
import { createDashboardRouter } from './routes/dashboard';
import { createStudentRouter } from './routes/students';
import { createCourseRouter } from './routes/courses';
import { createGroupRouter } from './routes/groups';
import { createTeacherRouter } from './routes/teachers';
import { createPaymentRouter } from './routes/payments';
import { createAdditionalCourseRouter } from './routes/additionalCourses';
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Atlas Academy API is running' });
});

app.use('/api/auth', createAuthRouter());
app.use('/api/dashboard', authMiddleware, createDashboardRouter());
app.use('/api/students', authMiddleware, createStudentRouter());
app.use('/api/courses', authMiddleware, createCourseRouter());
app.use('/api/groups', authMiddleware, createGroupRouter());
app.use('/api/teachers', authMiddleware, createTeacherRouter());
app.use('/api/payments', authMiddleware, createPaymentRouter());
app.use('/api/additional-courses', authMiddleware, createAdditionalCourseRouter());

app.use(errorHandler);
