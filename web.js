var express = require('express')
var serveStatic = require('serve-static')
 
var app = express()

port = parseInt(process.env.PORT, 10) || 80,
publicDir = process.argv[2] || __dirname + '/public';

app.use('/img', express.static(publicDir+'/img')))
app.use(serveStatic(publicDir, {'index': ['index.html', 'index.htm']}))
app.listen(port)
