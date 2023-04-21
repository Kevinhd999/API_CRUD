import { Router } from "express";
import * as productsController from '../controllers/productsController'

const router = Router()

router.get('/', productsController.obtenerProductos )

router.get('/:id', productsController.obtenerProductoporId )

router.post('/', productsController.crearProducto )

router.put('/:id', productsController.actiualizarProductoporId )

router.delete('/:id', productsController.eliminarProductoporId )


export default router;