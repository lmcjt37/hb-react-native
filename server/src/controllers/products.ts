import express from 'express'

const router = express.Router()

router.get('/all', (_, res) => {
  res.json({})
})

router.get('/:id', (_, res) => {
  res.json({})
})

export default router
