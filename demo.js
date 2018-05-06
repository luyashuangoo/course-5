const fs = require('fs')

const args = process.argv.slice(2)

fs.exists(args[0], isExists => {
  if (isExists) {
    console.log(args[0], ' is exists!');
    process.exit(1)
  } else {
    fs.mkdirSync(args[0])
    process.chdir(args[0])
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    fs.openSync('js/main.js', 'w')
    fs.openSync('css/style.css', 'w')
    fs.openSync('index.html')
  }
})

