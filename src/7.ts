import { NextFunction, Request, Response } from 'express';

export const helloWorld = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.query.name;
    const message = `Hello ${name}!`;
    res.status(200).json({ message });
  } catch (error) {
    console.log('Error:', error);
    next(error);
  }
};
