const {
  getZodiacFromYear,
} = require("./../services/getSignAndZodiacFromBirthdate");

module.exports = {
  GetZodiacFromYearController: (req, res, next) => {
    return getZodiacFromYear(req, res);
  },
};
