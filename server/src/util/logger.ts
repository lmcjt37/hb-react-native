import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  exitOnError: false,
  format: format.combine(format.colorize(), format.json()),
  transports: [new transports.Console()],
  level: 'info' // TODO: make this configurable
})

export default logger
