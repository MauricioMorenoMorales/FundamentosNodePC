const http = require('http')

const port = 3000

http.createServer(router).listen(port, listener)

function router(req, res) {
	switch (req.url) {
		case '/':
			res.end('Hola')
			console.log('Xd')
			break
		default:
			res.write('404, esa url no existe')
			res.end()
			break
	}
}

function listener(err) {
	if (err) {
		console.log('Ha ocurrido un error conectando el servidor')
		console.error(err)
	} else {
		console.log(`Servidor corriendo en el puerto ${port}`)
	}
}

console.log('escuchando htp en el puerto 3000')
