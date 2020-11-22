const interleavings = require('interleavings')

const Blobs = require('../inject')
const MockStore = require('./mock/blobs')
const MockPush = require('./mock/set')

const testCreate = (name, async) => Blobs(
  MockStore(name, async),
  MockPush(async),
  name
)

const name = 'ASYNC'
require('./suite/simple')(testCreate, interleavings.test, name)
require('./suite/integration')(testCreate, interleavings.test, name)
require('./suite/legacy')(testCreate, interleavings.test, name)
require('./suite/push')(testCreate, interleavings.test, name)
