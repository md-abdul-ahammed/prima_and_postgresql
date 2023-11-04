import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });

  return data;
};

export const CategoryService = {
  insertIntoDb,
};
