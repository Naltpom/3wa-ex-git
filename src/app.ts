import { Request, Response } from "express"

// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)




/**
 * @api {get} /echo Request Echo test
 * @apiName GetEcho
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.get('/echo', (req: Request, res: Response) => {
    res.jsonp(req.query)
})
  
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use(router)
server.listen(3010, () => {
  console.log('JSON Server is running')
})