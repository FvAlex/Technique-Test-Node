const app = require('./index.js')
const port = 3000

app.listen(process.env.PORT || port, () => {
  console.log(`Horoscope app listening on port ${port}`)
})
