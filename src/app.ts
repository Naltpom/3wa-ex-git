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
 * @apiGroup Echo
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.get('/echo', (req: Request, res: Response) => {
    res.jsonp(req.query)
})
  
/**
 * @api {get} /houses Request Houses
 * @apiName GetHouse
 * @apiGroup House
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.get('/houses', (req: Request, res: Response) => {

})

/**
 * @api {get} /houses/:id Request Houses
 * @apiName GetHouse
 * @apiGroup House
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.get('/houses/:id', (req: Request, res: Response) => {

})

/**
 * @api {post} /houses Request Houses
 * @apiName PostHouse
 * @apiGroup House
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {}
 */
server.post('/houses', (req: Request, res: Response) => {

})

/**
 * @api {patch} /houses/:id Request Houses
 * @apiName PatchHouse
 * @apiGroup House
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.patch('/houses/:id', (req: Request, res: Response) => {

})

/**
 * @api {delete} /houses/:id Request Houses
 * @apiName DeleteHouse
 * @apiGroup House
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 202 OK
 *     {}
 */
server.delete('/houses/:id', (req: Request, res: Response) => {

})

/**
 * @api {get} /houses/:housesId/people Request Houses people
 * @apiName GetHousePeople
 * @apiGroup HousePeople
 *
 * @apiParam {Number} housesId Houses unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.get('/houses/:housesId/people', (req: Request, res: Response) => {

})

/**
 * @api {get} /houses/:housesId/people/:id Request Houses people
 * @apiName GetHousePeople
 * @apiGroup HousePeople
 *
 * @apiParam {Number} housesId Houses unique ID.
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.get('/houses/:housesId/people/:id', (req: Request, res: Response) => {

})

/**
 * @api {post} /houses/:housesId/people Request Houses people
 * @apiName PostHousePeople
 * @apiGroup HousePeople
 *
 * @apiParam {Number} housesId Houses unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {}
 */
server.post('/houses/:housesId/people', (req: Request, res: Response) => {

})

/**
 * @api {patch} /houses/:housesId/people/:id Request Houses people
 * @apiName PatchHousePeople
 * @apiGroup HousePeople
 *
 * @apiParam {Number} housesId Houses unique ID.
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
server.patch('/houses/:housesId/people/:id', (req: Request, res: Response) => {

})

/**
 * @api {delete} /houses/:housesId/people/:id Request Houses people
 * @apiName DeleteHousePeople
 * @apiGroup HousePeople
 *
 * @apiParam {Number} housesId Houses unique ID.
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 202 OK
 *     {}
 */
server.delete('/houses/:housesId/people/:id', (req: Request, res: Response) => {

})


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use(router)
server.listen(3010, () => {
  console.log('JSON Server is running')
})