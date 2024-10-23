import express from 'express'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../Controllers/productController.js'

const router = express.Router()

router.get('/getdata', getProducts)
router.get('/productdetails/:id', getProductById)
router.post('/createproduct', createProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

export default router
