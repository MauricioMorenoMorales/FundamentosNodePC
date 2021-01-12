const { exec, spawn } = require('child_process')

exec(
	'ls -la' /*Aqui puedes ejecutar cualquier comando de consola*/,
	(err, stdout, sterr) => {
		if (err) {
			console.log(err)
			return false
		}
		console.log(stdout)
	},
)

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', dato => {
	console.log('Esta muerto?')
	console.log(proceso.killed)
	console.log(dato.toString())
})

proceso.on('exit', () => {
	console.log('el proceso termino')
	console.log(proceso.killed)
})
