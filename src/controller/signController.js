const {
  getZodiacFromYear,
  getAstrologicalSignFromMonthAndDay,
} = require("./../services/getSignAndZodiacFromBirthdate");

module.exports = {
  GetZodiacFromYearController: (req, res, next) => {
    return getZodiacFromYear(req, res);
  },

  GetAstrologicalSignFromMonthAndDayController: (req, res, next) => {
    return getAstrologicalSignFromMonthAndDay(req, res);
  },
};
