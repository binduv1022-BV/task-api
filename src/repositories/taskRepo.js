import prisma from '../config/db.js';

export async function findAll(completed) {
  const where = completed === undefined
    ? {}
    : { completed: completed === 'true' };

  return prisma.task.findMany({ where });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
