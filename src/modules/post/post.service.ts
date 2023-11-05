import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const getAllPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;

  const skip = Number(limit) * Number(page) - Number(limit) || 0;
  const take = Number(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },

      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });

    const total = await tx.post.count();

    return { data: result, total };
  });
};

const updatePost = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  const result = prisma.post.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deletePost = async (id: number): Promise<Post> => {
  const result = prisma.post.delete({
    where: {
      id,
    },
  });

  return result;
};

const learnAggregateAndGrouping = async () => {
  // const result = prisma.post.aggregate({
  //   _avg: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  //   _count: {
  //     authorId: true,
  //   },
  //   _sum: {
  //     categoryId: true,
  //   },
  // });

  const result = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
    },
  });

  return result;
};

export const PostService = {
  insertIntoDb,
  getAllPosts,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
