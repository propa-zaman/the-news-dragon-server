// server end setup
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5002

// loading data
const categories = require('./data/categories.json')
const news = require('./data/news.json')

// to call from other api
app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon is running')
})

// all categories data
app.get('/categories', (req, res) => {
  res.send(categories);
})

// all news
app.get('/news', (req, res) => {
  res.send(news);
})

//Id dhore dhore specific ekta news, ekhane find
app.get('/news/:id', (req, res) => {  
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews);
})

//categories onujay e news pabo, ekhane filter
app.get('/categories/:id', (req, res) => {    
  const id = req.params.id;
  console.log(id);
  if (id == 0) {
    res.send(news);
  }
  else {
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews);
  }

})


app.listen(port, () => {
  console.log(`dragon api is running on the port ${port}`)
})