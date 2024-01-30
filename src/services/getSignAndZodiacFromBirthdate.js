const { getZodiac, getSign } = require('horoscope')
const CustomError = require('../errors/customError')
const { INCORRECT_YEAR, INCORRECT_MONTH, INCORRECT_DAY } = require('../errors/errorCodes')

module.exports = {
  getZodiacFromYear: (req, res) => {
    try {
      const birthYear = Number(req.params.birthYear)

      if (isNaN(birthYear) || birthYear <= 0 || birthYear > 9999) {
        console.log('Année introuvable')
        throw new CustomError(INCORRECT_YEAR)
      } else {
        return res.json({ zodiac: getZodiac(birthYear) })
      }
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: e.message })
    }
  },
  getAstrologicalSignFromMonthAndDay: (req, res) => {
    try {
      const birthMonth = Number(req.params.birthMonth)
      const birthDay = Number(req.params.birthDay)

      if (isNaN(birthMonth) || birthMonth < 0 || birthMonth > 12) {
        console.log('Le mois est invalide')
        throw new CustomError(INCORRECT_MONTH)
      } else if (isNaN(birthDay) || birthDay < 0 || birthDay > 31) {
        console.log('Le jours est invalide')
        throw new CustomError(INCORRECT_DAY)
      } else {
        return res.json({
          astrologicalSign: getSign({ month: birthMonth, day: birthDay })
        })
      }
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: e.message })
    }
  }
}
