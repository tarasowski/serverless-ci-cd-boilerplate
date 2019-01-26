const { view, lensProp } = require('lambda.lenses')


const handler = event =>
    view(lensProp('name'), event)


module.exports = { handler }