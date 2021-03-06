import { Prisma, PrismaClient } from "@prisma/client";
import moment from "moment";


const prisma = new PrismaClient();

const text = "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります" +
  "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります";

const usersData: Prisma.UserCreateInput[] = [
  {
    email: "example1@test.com",
    name: "ユーザー1",
    description: "宜しくお願いします",
    role: "ADMIN",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK", // passwordをハッシュ化した文字列
    createdAt: moment().format()
  },
  {
    email: "example2@test.com",
    name: "ユーザー2",
    description: "宜しくお願いします",
    role: "ADMIN",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example3@test.com",
    name: "ユーザー3",
    description: "宜しくお願いします",
    role: "ADMIN",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example4@test.com",
    name: "ユーザー4",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example5@test.com",
    name: "ユーザー5",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example6@test.com",
    name: "ユーザー6",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example7@test.com",
    name: "ユーザー7",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example8@test.com",
    name: "ユーザー8",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example9@test.com",
    name: "ユーザー9",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example10@test.com",
    name: "ユーザー10",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example11@test.com",
    name: "ユーザー11",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example12@test.com",
    name: "ユーザー12",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example13@test.com",
    name: "ユーザー13",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example14@test.com",
    name: "ユーザー14",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example15@test.com",
    name: "ユーザー15",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example16@test.com",
    name: "ユーザー16",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example17@test.com",
    name: "ユーザー17",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example18@test.com",
    name: "ユーザー18",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example19@test.com",
    name: "ユーザー19",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example20@test.com",
    name: "ユーザー20",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example21@test.com",
    name: "ユーザー21",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example22@test.com",
    name: "ユーザー22",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example500@test.com",
    name: "ユーザー500",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    avatarUri: "http://placekitten.com/200/300",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example23@test.com",
    name: "ユーザー23",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example24@test.com",
    name: "ユーザー24",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example25@test.com",
    name: "ユーザー25",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example26@test.com",
    name: "ユーザー26",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example27@test.com",
    name: "ユーザー27",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example28@test.com",
    name: "ユーザー28",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example29@test.com",
    name: "ユーザー29",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example30@test.com",
    name: "ユーザー30",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
  {
    email: "example31@test.com",
    name: "ユーザー31",
    description: "宜しくお願いします",
    role: "NORMAL_USER",
    password: "$2b$10$PkiF15DG3ewagt.6M03eCOzIXBUGoWNTbGC30qsv8g29NGUkNAnwK",
    createdAt: moment().format()
  },
];


const postsData: Prisma.PostCreateInput[] = [
  {
    content: `ユーザー1のテスト投稿です！検索test用${text}`,
    imageUri: "http://placekitten.com/200/300",
    user: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー1のテスト投稿です！${text}`,
    user: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー1のテスト投稿です！${text}`,
    user: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー2のテスト投稿です！${text}`,
    user: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー2のテスト投稿です！${text}`,
    user: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー2のテスト投稿です！${text}`,
    user: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー2のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    content: `ユーザー3のテスト投稿です！${text}`,
    user: { connect: { id: 3 } },
    createdAt: moment().format()
  }
];

const commentsData: Prisma.CommentCreateInput[] = [
  {
    text: "テストコメント1",
    user: { connect: { id: 1 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "テストコメント2",
    user: { connect: { id: 1 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "コメントおおおおおコメントおおおおおコメントおおおおおコメントおおおおおコメントおおおおおコメントおおおおおコメントおおおおお",
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    text: "テストコメント3",
    user: { connect: { id: 1 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    text: "テストコメント4",
    user: { connect: { id: 1 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },

]

const likesData: Prisma.LikeCreateInput[] = [
  {
    user: { connect: { id: 1 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 1 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 1 } },
    post: { connect: { id: 3 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 2 } },
    post: { connect: { id: 1 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 2 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 3 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 4 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },
  {
    user: { connect: { id: 5 } },
    post: { connect: { id: 2 } },
    createdAt: moment().format()
  },
]


async function createSeedData() {

  try {

    for (const user of usersData) {
      await prisma.user.create({ data: user });
    }

    for (const post of postsData) {
      await prisma.post.create({ data: post });
    }

    for (const comment of commentsData) {
      await prisma.comment.create({ data: comment });
    }

    for (const like of likesData) {
      await prisma.like.create({ data: like })
    }

  } catch (error: unknown) {

    console.error(error);
    process.exit(1);
  } finally {

    await prisma.$disconnect();
  }
}

createSeedData();
