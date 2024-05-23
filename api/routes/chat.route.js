import express from "express"
import {
    getChats,
    getChat,
    addChat,
    readChat,
} from "../controllers/chat.controller.js"
import {verifyToken} from "../utils/verifiedUser.js"

const router = express.Router()

router.get("/", verifyToken, getChats)
router.get("/:id", verifyToken, getChat)
router.post("/", verifyToken, addChat)
router.post("/read/:id", verifyToken, readChat)

export default router
