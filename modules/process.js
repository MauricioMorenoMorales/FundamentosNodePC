const process = require('process')

process.on('beforeExit', () => {
	console.log('El proceso va a terminar')
})

process.on('exit', () => {
	console.log('El proceso ha finalizado')
	setTimeout(() => {
		console.log(
			'esto no se ejecutara nunca ya que exit es cuando ya se desconecta de el event loop',
		)
	}, 3000)
})

setTimeout(() => {
	console.log('Esto si se va a ver ')
}, 3000)

process.on('uncaughtException', () => {
	console.log('El proceso ha finalizado')
})

process.on('uncaughtException', (err, origen) => {
	console.log(`Valla se noas ha olvidado capturar un error: ${err}`)
})

functionxd()

console.log('esto si el error no se recoge no sale')
