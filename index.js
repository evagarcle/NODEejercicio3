const Logger = require('logplease')
const logger = Logger.create('utils')
const numeros = require('./numeros.js')

const valores = [2, 3, 101, 201, 202, 100]

valores.forEach(numero => {
    if (numeros.esPar(numero)) {
        logger.info('El número es par')
    } else {
        logger.error('El número no es par')
    }
})
