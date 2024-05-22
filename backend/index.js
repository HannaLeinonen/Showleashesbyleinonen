const express = require('express'),
path = require('path')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.send({hello: 'world'})
})

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
