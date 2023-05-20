import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: any
      id: number
      name: string
      age: number
    }
  }
}
