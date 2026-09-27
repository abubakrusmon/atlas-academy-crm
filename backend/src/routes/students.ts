import { Router } from 'express';
import { mockCourses, mockGroups, mockStudents, mockTeachers } from '../data/mockData';

export const createStudentRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => {
    const students = mockStudents.map((student) => ({
      ...student,
      course: mockCourses.find((course) => course.id === student.courseId),
      group: mockGroups.find((group) => group.id === student.groupId),
      teacher: mockTeachers.find((teacher) => teacher.id === student.teacherId),
    }));
    res.json(students);
  });

  router.get('/:id', (req, res) => {
    const student = mockStudents.find((item) => item.id === Number(req.params.id));
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    return res.json({
      ...student,
      course: mockCourses.find((course) => course.id === student.courseId),
      group: mockGroups.find((group) => group.id === student.groupId),
      teacher: mockTeachers.find((teacher) => teacher.id === student.teacherId),
    });
  });

  router.post('/', (req, res) => {
    const student = {
      id: mockStudents.length + 1,
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockStudents.push(student);
    res.status(201).json(student);
  });

  router.put('/:id', (req, res) => {
    const index = mockStudents.findIndex((item) => item.id === Number(req.params.id));
    if (index === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }
    mockStudents[index] = { ...mockStudents[index], ...req.body, updatedAt: new Date().toISOString() };
    return res.json(mockStudents[index]);
  });

  router.delete('/:id', (req, res) => {
    const index = mockStudents.findIndex((item) => item.id === Number(req.params.id));
    if (index === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }
    mockStudents.splice(index, 1);
    return res.json({ message: 'Student deleted' });
  });

  return router;
};
