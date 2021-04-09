const express = require('express')
const hbs = require('hbs')

const site = express()
const port = process.env.PORT || 3000

// site.set('view engine', 'hbs')
// site.set('views', './templates')

site.use( express.static('./public'))

site.get('', (req, res)=>{
    // res.send('Server working')
    res.render('index', {})
})

site.listen(port, ()=>{
    console.log('Server fired up on port ' + port + '...\n')
})