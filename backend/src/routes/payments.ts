import { Router } from 'express';
import { mockPayments } from '../data/mockData';

export const createPaymentRouter = () => {
  const router = Router();

  router.get('/', (_req, res) => res.json(mockPayments));

  router.post('/', (req, res) => {
    const payment = {
      id: mockPayments.length + 1,
      ...req.body,
    };
    mockPayments.push(payment);
    res.status(201).json(payment);
  });

  return router;
};
