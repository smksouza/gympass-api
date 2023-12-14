import { FastifyInstance } from 'fastify'

import { VerifyJWT } from '../../middlewares/verify-jwt'
import { create } from './create'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', VerifyJWT)

  app.post('/gyms/:gymId/check-ins', create)
}
