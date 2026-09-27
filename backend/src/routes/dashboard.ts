import { Router } from 'express';
import { dashboardStats, mockCourses, mockGroups, mockStudents, mockTeachers } from '../data/mockData';

export const createDashboardRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => {
    const stats = dashboardStats();
    const charts = mockCourses.map((course) => ({
      name: course.name,
      value: mockStudents.filter((student) => student.courseId === course.id).length,
    }));

    const teacherLoad = mockTeachers.map((teacher) => ({
      name: `${teacher.firstName} ${teacher.lastName}`,
      count: mockStudents.filter((student) => student.teacherId === teacher.id).length,
    }));

    res.json({ stats, charts, teacherLoad });
  });

  return router;
};
