import { Router } from 'express';
import { mockAdditionalCourses, mockTeachers } from '../data/mockData';

export const createAdditionalCourseRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => {
    res.json(mockAdditionalCourses.map((course) => ({
      ...course,
      teacher: mockTeachers.find((teacher) => teacher.id === course.teacherId),
    })));
  });

  router.post('/', (req, res) => {
    const course = {
      id: mockAdditionalCourses.length + 1,
      ...req.body,
    };
    mockAdditionalCourses.push(course);
    res.status(201).json(course);
  });

  return router;
};
