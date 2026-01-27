import express from 'express'

import { productsController } from '../init/controllers/productsController.js'
import { servicesController } from '../controllers/servicesController.js'
import { getAllData } from '../controllers/getAllData.js'
import { getDataByPathParams } from '../controllers/getDataByPathParams.js'

export const apiRouter = express.Router()

apiRouter.get('/products', productsController)
apiRouter.get('/services', servicesController)

apiRouter.get('/', getAllData)
apiRouter.get('/:field/:term', getDataByPathParams)