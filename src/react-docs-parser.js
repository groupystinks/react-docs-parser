import * as parser from 'react-docgen'
import fs from 'fs'
import path from 'path'

function parse(source) {
  let docsData

  const data = fs.readFileSync(source, 'utf8')

  docsData = new Promise((resolve, reject) => {
    resolve(parser.parse(data))
  })

  return docsData
}

export {
  parse
}
