const { getParams } = require('./index')
const fs = require('fs')

const run = async () => {
  try {
    const params = await getParams()
    console.log(params)
  } catch (e) {
    console.error(e)
  }
}

run()
