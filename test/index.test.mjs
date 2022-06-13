import TestDirector from 'test-director'
import base58_to_binary from './base58_to_binary.test.mjs'
import binary_to_base58 from './binary_to_base58.test.mjs'

const tests = new TestDirector()
base58_to_binary(tests)
binary_to_base58(tests)
tests.run()
