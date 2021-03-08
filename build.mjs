import * as fs from 'fs'
import patterns from './moyo.mjs'

function mkDir (dir) {
  if (fs.existsSync(dir)) {
    console.log(`The ${dir} directory exists!`)
  } else {
    console.log(`The ${dir} directory was not found. Creating...`)
    fs.mkdirSync(dir)
    console.log('Done')
  }
}

function createFile (path, file) {
  fs.writeFileSync(path, file, err => {
    if (err) {
      console.log(err)
      throw err
    }
  })
}

function generateMasterSVG (patterns) {
  const file = `<svg aria-hidden="true" style="clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px;">
  <defs>
  ${patterns.join('\n')}
  </defs>
</svg>`
  createFile('dist/moyo.svg', file)
  return file
}

function generateSVGFiles (patterns) {
  const svgFiles = []
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i]
    const id = RegExp(/id="([^"]*)"/g).exec(pattern)[1]
    const width = RegExp(/width="([^"]*)"/).exec(pattern)[1]
    const height = RegExp(/height="([^"]*)"/).exec(pattern)[1]
    const geometry = RegExp(/<pattern[^>]+?>([^$]+?)<\/pattern>/g).exec(pattern)[1]
    const file = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${geometry}</svg>`
    const cssObj = [id, file]
    svgFiles.push(cssObj)
    createFile(`dist/svgs/${id}.svg`, file)
  }
  return svgFiles
}

function generateCSS (files) {
  let cssFile = ''
  for (let i = 0; i < files.length; i++) {
    const entry = files[i]
    const id = entry[0]
    const buff = Buffer.from(entry[1], 'utf-8')
    const base64 = buff.toString('base64')
    const classDeclaration = `\n.moyo-${id} {
      background: white url("data:image/svg+xml;base64,${base64}");
      background-repeat: repeat;
    }\n`
    cssFile += classDeclaration
  }

  createFile('dist/moyo.css', cssFile)
}

function generateDemos (files, masterSVG) {
  let htmlDemo = ''
  let svgDemo = ''
  for (let i = 0; i < files.length; i++) {
    const entry = files[i]
    const id = entry[0]
    const html = `<div><em>.moyo-${id}</em><div class="pattern-demo moyo-${id}" aria-label="This is a pattern demo"></div></div>`
    htmlDemo += html
    const svg = `<div><em>#${id}</em><svg height="100" width="100"><rect style="fill: url(#${id});" height="100%" width="100%"></rect></svg></div>`
    svgDemo += svg
  }
  createFile('dist/demo-css.html', htmlDemo)
  createFile('dist/demo-svg.html', svgDemo)
}

async function createFiles () {
  await mkDir('dist')
  await mkDir('dist/svgs')

  const masterSVG = generateMasterSVG(patterns)
  const files = generateSVGFiles(patterns)
  generateCSS(files)
  generateDemos(files, masterSVG)
}

createFiles()
