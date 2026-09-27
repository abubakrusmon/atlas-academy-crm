import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { mockUsers } from '../data/mockData';

export const createAuthRouter = () => {
  const router = Router();

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = mockUsers.find((item) => item.email === String(email));

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(String(password), user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, env.jwtSecret, { expiresIn: '7d' });

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  });

  return router;
};
