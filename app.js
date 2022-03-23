// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = 3000
const configList = require('./config.json').results

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting the route and corresponding response
app.get('/', (req, res) => {
  for (let i = 0; i < configList.length; i++) {
    configList[i].type = "btn-light"
  }
  res.render('index', { show: "首頁", configs: configList })
})

app.get('/:select', (req, res) => {  

  for(let i = 0; i < configList.length; i++) {
    configList[i].type = "btn-light"
  }
  const config = configList.find(t => t.id === req.params.select)
  config.type = "btn-dark"
  // console.log(configList)
    
  res.render('index', { show: config.Msg, configs: configList }) 
  
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})