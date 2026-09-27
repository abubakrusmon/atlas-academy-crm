export const mockUsers = [
  {
    id: 1,
    email: 'admin@atlasacademy.com',
    password: '$2a$10$Q9jUAYlV4p0R8brhR1xOnu4fR7kI.Xpy4xV4hOwV1JTUdY4N2M4e2',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin' as const,
  },
  {
    id: 2,
    email: 'teacher@atlasacademy.com',
    password: '$2a$10$Q9jUAYlV4p0R8brhR1xOnu4fR7kI.Xpy4xV4hOwV1JTUdY4N2M4e2',
    firstName: 'Mikhail',
    lastName: 'Petrov',
    role: 'teacher' as const,
  },
  {
    id: 3,
    email: 'student@atlasacademy.com',
    password: '$2a$10$Q9jUAYlV4p0R8brhR1xOnu4fR7kI.Xpy4xV4hOwV1JTUdY4N2M4e2',
    firstName: 'Ali',
    lastName: 'Karimov',
    role: 'student' as const,
  },
];

export const mockTeachers = [
  { id: 1, firstName: 'Mikhail', lastName: 'Petrov', email: 'mikhail@atlasacademy.com', phone: '+998901234567', specialty: 'Programming', status: 'Active' },
  { id: 2, firstName: 'Nargiza', lastName: 'Abdullaeva', email: 'nargiza@atlasacademy.com', phone: '+998905555555', specialty: 'English', status: 'Active' },
  { id: 3, firstName: 'Sardor', lastName: 'Karimov', email: 'sardor@atlasacademy.com', phone: '+998906666666', specialty: 'Mathematics', status: 'Active' },
];

export const mockCourses = [
  { id: 1, name: 'English', description: 'Core English course', courseNumber: 1, duration: '6 months', teacherId: 2, status: 'Active', createdAt: '2024-09-01' },
  { id: 2, name: 'Programming', description: 'Programming basics', courseNumber: 1, duration: '8 months', teacherId: 1, status: 'Active', createdAt: '2024-09-02' },
  { id: 3, name: 'Mathematics', description: 'Basic mathematics', courseNumber: 1, duration: '6 months', teacherId: 3, status: 'Active', createdAt: '2024-09-03' },
  { id: 4, name: 'Advanced Programming', description: 'Web development and databases', courseNumber: 2, duration: '8 months', teacherId: 1, status: 'Active', createdAt: '2024-09-04' },
];

export const mockGroups = [
  { id: 1, name: '1A', courseId: 1, teacherId: 2, room: 'A-101', schedule: 'Mon/Wed/Fri', maxStudents: 25, status: 'Active' },
  { id: 2, name: '1B', courseId: 2, teacherId: 1, room: 'B-204', schedule: 'Tue/Thu/Sat', maxStudents: 20, status: 'Active' },
  { id: 3, name: '2A', courseId: 4, teacherId: 1, room: 'C-110', schedule: 'Mon/Wed/Fri', maxStudents: 18, status: 'Active' },
];

export const mockStudents = [
  { id: 1, firstName: 'Ali', lastName: 'Karimov', phone: '+998901234567', email: 'ali@example.com', birthDate: '2009-05-12', gender: 'Male', courseId: 2, groupId: 2, teacherId: 1, enrollmentDate: '2024-09-01', status: 'Active', averageGrade: 92, attendancePercentage: 96, bonusPoints: 40, createdAt: '2024-09-01', updatedAt: '2024-09-20' },
  { id: 2, firstName: 'Nodira', lastName: 'Sultonova', phone: '+998907654321', email: 'nodira@example.com', birthDate: '2010-02-12', gender: 'Female', courseId: 1, groupId: 1, teacherId: 2, enrollmentDate: '2024-09-02', status: 'Active', averageGrade: 89, attendancePercentage: 94, bonusPoints: 35, createdAt: '2024-09-02', updatedAt: '2024-09-20' },
  { id: 3, firstName: 'Asad', lastName: 'Mirzoev', phone: '+998906543210', email: 'asad@example.com', birthDate: '2008-11-22', gender: 'Male', courseId: 4, groupId: 3, teacherId: 1, enrollmentDate: '2023-09-01', status: 'Active', averageGrade: 87, attendancePercentage: 91, bonusPoints: 25, createdAt: '2023-09-01', updatedAt: '2024-09-20' },
  { id: 4, firstName: 'Laylo', lastName: 'Tadjibaeva', phone: '+998905432198', email: 'laylo@example.com', birthDate: '2011-07-18', gender: 'Female', courseId: 3, groupId: 1, teacherId: 3, enrollmentDate: '2024-09-05', status: 'Inactive', averageGrade: 76, attendancePercentage: 81, bonusPoints: 12, createdAt: '2024-09-05', updatedAt: '2024-09-07' },
];

export const mockAdditionalCourses = [
  { id: 1, name: 'IELTS Prep', description: 'IELTS preparation', teacherId: 2, price: 400, duration: '8 weeks', startDate: '2024-10-01', endDate: '2024-11-24', status: 'Active' },
  { id: 2, name: 'Python Fundamentals', description: 'Python basics', teacherId: 1, price: 350, duration: '6 weeks', startDate: '2024-10-03', endDate: '2024-11-15', status: 'Active' },
  { id: 3, name: 'UI/UX Design', description: 'Design principles', teacherId: 1, price: 320, duration: '7 weeks', startDate: '2024-10-11', endDate: '2024-11-29', status: 'Active' },
];

export const mockPayments = [
  { id: 1, studentId: 1, amount: 1200, status: 'Paid', paymentDate: '2024-09-15', note: 'Tuition fee' },
  { id: 2, studentId: 2, amount: 980, status: 'Pending', paymentDate: '2024-09-17', note: 'Tuition fee' },
  { id: 3, studentId: 3, amount: 1350, status: 'Paid', paymentDate: '2024-09-10', note: 'Tuition fee' },
  { id: 4, studentId: 4, amount: 620, status: 'Overdue', paymentDate: '2024-09-01', note: 'Tuition fee' },
];

export const dashboardStats = () => ({
  totalStudents: mockStudents.length,
  course1: mockStudents.filter((s) => s.courseId === 1).length,
  course2: mockStudents.filter((s) => s.courseId === 2).length,
  additionalCourses: mockAdditionalCourses.length,
  totalGroups: mockGroups.length,
  totalTeachers: mockTeachers.length,
  averageGrade: Number((mockStudents.reduce((sum, s) => sum + s.averageGrade, 0) / mockStudents.length).toFixed(1)),
  averageAttendance: Number((mockStudents.reduce((sum, s) => sum + s.attendancePercentage, 0) / mockStudents.length).toFixed(1)),
  totalPayments: mockPayments.reduce((sum, item) => sum + item.amount, 0),
  debtors: mockPayments.filter((item) => item.status !== 'Paid').length,
});
