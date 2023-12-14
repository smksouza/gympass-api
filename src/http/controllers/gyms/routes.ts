import { FastifyInstance } from 'fastify'
import { VerifyJWT } from '../../middlewares/verify-jwt'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', VerifyJWT)
}
