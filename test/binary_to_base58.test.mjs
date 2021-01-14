import { ok } from 'assert'
import binary_to_base58 from '../public/binary_to_base58.js'

export default tests => {
  tests.add('binary to base58 string', () => {
    ok(
      binary_to_base58(
        new Uint8Array(
          Buffer.from(
            '02c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cfeb05f9d2',
            'hex'
          )
        )
      ) == '6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
      'Expected output'
    )
    ok(binary_to_base58([0, 0, 0, 4]) == '1115', 'Expected output')
  })
}
