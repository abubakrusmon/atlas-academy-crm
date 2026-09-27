import { Router } from 'express';
import { mockCourses, mockTeachers } from '../data/mockData';

export const createCourseRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => {
    res.json(mockCourses.map((course) => ({
      ...course,
      teacher: mockTeachers.find((teacher) => teacher.id === course.teacherId),
    })));
  });

  router.post('/', (req, res) => {
    const course = {
      id: mockCourses.length + 1,
      ...req.body,
      createdAt: new Date().toISOString(),
    };
    mockCourses.push(course);
    res.status(201).json(course);
  });

  return router;
};
