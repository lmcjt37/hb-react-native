import express from 'express'
import compression from 'compression'

const router = express.Router()

router.use(compression())
router.use(express.json())

export default router
