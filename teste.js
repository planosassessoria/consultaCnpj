const { getParams } = require('./index')
const fs = require('fs')

const run = async () => {
  try {
    const params = await getParams({ proxy: 'http://dorcilio@gmail.com:kmab1960@br.torguardvpnaccess.com:6060' })
    console.log(params)
  } catch (e) {
    console.error(e)
  }
}

run()
