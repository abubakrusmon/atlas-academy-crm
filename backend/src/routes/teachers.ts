import { Router } from 'express';
import { mockTeachers } from '../data/mockData';

export const createTeacherRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => res.json(mockTeachers));

  router.post('/', (req, res) => {
    const teacher = {
      id: mockTeachers.length + 1,
      ...req.body,
    };
    mockTeachers.push(teacher);
    res.status(201).json(teacher);
  });

  return router;
};
