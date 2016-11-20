var express = require('express')
var serveStatic = require('serve-static')
 
var app = express()

port = parseInt(process.env.PORT, 10) || 8080,
publicDir = process.argv[2] || __dirname + '/public';

<<<<<<< HEAD
app.use('/img', express.static(publicDir+'/img')))
=======



app.use('/img', express.static(publicDir+'/img'))

>>>>>>> origin/master
app.use(serveStatic(publicDir, {'index': ['index.html', 'index.htm']}))
app.listen(port)
