const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('' , (req, res) => {
    res.redirect('https://cdcgov.github.io/MicrobeTrace/')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})