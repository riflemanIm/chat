
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./chat.cjs.production.min.js')
} else {
  module.exports = require('./chat.cjs.development.js')
}
