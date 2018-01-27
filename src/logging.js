const winston = require('winston')

const tsFormat = () => (new Date()).toLocaleTimeString()

const logger = new (winston.logger) ({
	transports: [
		new (winston.transports.Console) ({
			timestamp: tsFormat,
			colorize: true,
		})
	]
})

logger.level = process.env.RASWDB_LOG

module.export = logger
