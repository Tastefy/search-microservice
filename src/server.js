import express from 'express'
import bodyParser from 'body-parser'
import client from './es'

const app = express()

const port = process.env.PORT || 8888

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  const q = req.query.q

  client.search({
    q: q
  }).then(function (body) {
    const hits = body.hits.hits;
    res.json(hits)
  }, next);
})

app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.toString()
  })
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening on port ${port}`)
})
