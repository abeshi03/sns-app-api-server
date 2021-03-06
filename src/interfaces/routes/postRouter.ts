/* --- フレームワーク、ライブラリー --------------------------------------------------------------------------------------- */
import express from "express";
import { param, query } from "express-validator";
import { PrismaClient } from "@prisma/client";

/* --- コントローラー -------------------------------------------------------------------------------------------------- */
import { PostController } from "../controllers/PostController";
import { LikeController } from "../controllers/LikeController";

/* --- リクエスト ----------------------------------------------------------------------------------------------------- */
import { FindPostListRequest } from "../request/post/FindPostListRequest";


const router = express.Router();

const postRoutes = (prisma: PrismaClient): express.Router => {
  const postController = new PostController(prisma);
  const likeController = new LikeController(prisma);


  /* --- 投稿一覧取得 -------------------------------------------------------------------------------------------------- */
  router.get(
    "/",
    [
      query("limit")
        .exists()
        .withMessage("limit is missing")
        .isInt()
        .withMessage("Invalid limit"),
      query("pageNumber")
        .exists()
        .withMessage("pageNumber is missing")
        .isInt()
        .withMessage("Invalid pageNumber"),
      query("searchByPostContent")
        .optional().isString().withMessage("Invalid searchByPostContent")
    ],
    async (req: FindPostListRequest, res: express.Response): Promise<void> => {
      const results = await postController.findList(req, req.session.userId);
      res.status(results.code).send(results)
    }
  )

  /* --- idでの投稿取得 ------------------------------------------------------------------------------------------------ */
  router.get(
    "/:id",
    [
      param("id")
        .exists()
        .isInt()
        .withMessage("Invalid id")
    ],
    async (req: express.Request, res: express.Response): Promise<void> => {
      const results = await postController.find(req, req.session.userId);
      res.status(results.code).send(results);
    }
  )

  /* --- イイネ関連 --------------------------------------------------------------------------------------------------- */
  router.post(
    "/:id/like",
    [
      param("id")
        .exists()
        .isInt()
        .withMessage("Invalid id")
    ],
    async (req: express.Request, res: express.Response): Promise<void> => {
      const results = await likeController.addLike(req, req.session.userId);
      res.status(results.code).send(results);
    }
  )

  router.delete(
    "/:id/like",
    [
      param("id")
        .exists()
        .isInt()
        .withMessage("Invalid id")
    ],
    async (req: express.Request, res: express.Response): Promise<void> => {
      const results = await likeController.removeLike(req, req.session.userId);
      res.status(results.code).send(results);
    }
  )

  return router;
}


export { postRoutes };
