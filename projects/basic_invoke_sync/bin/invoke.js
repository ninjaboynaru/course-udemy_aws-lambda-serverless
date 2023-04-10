require('dotenv-safe').config()
const { execSync } = require('node:child_process')

const lambdaName = process.env.LAMBDA_NAME
const payload = process.env.PAYLOAD
const outfilePath = './output/response.json'

function consoleDivider() {
	console.log('<<---------------------------------------------------------------------------------->>')
}

async function main() {
	consoleDivider()
	console.log(`SYNCHRONOUSLY INVOKING LAMBDA WITH NAME: ${lambdaName}`)

	const commandComposition = [
		'aws lambda invoke',
		`--function-name ${lambdaName}`,
		`--payload '${payload}'`,
		'--log-type Tail',
		outfilePath,
		'--query \'LogResult\'',
		'--output text',
		'--cli-binary-format raw-in-base64-out',
		'| base64 -d'
	]

	const commandString = commandComposition.join(' ')
	console.log(`\nEXECUTING CLI COMMAND: ${commandString}`)

	const invocationResponse = execSync(commandString)
	console.log(`\nCOMMAND RESPONSE:\n${invocationResponse}`)
	consoleDivider()
}

main()
