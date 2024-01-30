const {
  GetZodiacFromYearController,
  GetAstrologicalSignFromMonthAndDayController
} = require('./../controller/signController')

function routes() {
  this.init = function (app) {
    app.get('/api/zodiac/:birthYear', function (req, res, next) {
      return GetZodiacFromYearController(req, res, next)
    })

    app.get('/api/sign/:birthMonth/:birthDay', function (req, res, next) {
      return GetAstrologicalSignFromMonthAndDayController(req, res, next)
    })

    app.all(/.*/, function (req, res, next) {
      res.json({ message: "Cette URL n'existe pas" })
      console.log("Cette URL n'existe pas")
    })
  }
}

module.exports = new routes()
