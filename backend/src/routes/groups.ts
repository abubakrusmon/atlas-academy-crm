import { Router } from 'express';
import { mockGroups, mockTeachers } from '../data/mockData';

export const createGroupRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => {
    res.json(mockGroups.map((group) => ({
      ...group,
      teacher: mockTeachers.find((teacher) => teacher.id === group.teacherId),
    })));
  });

  router.post('/', (req, res) => {
    const group = {
      id: mockGroups.length + 1,
      ...req.body,
    };
    mockGroups.push(group);
    res.status(201).json(group);
  });

  return router;
};
