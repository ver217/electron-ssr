import * as tcpp from 'tcp-ping'

export async function ping (address, port) {
  return new Promise((resolve, reject) => {
    tcpp.ping({
      address,
      port,
      attempts: 3,
      timeout: 3000
    }, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
