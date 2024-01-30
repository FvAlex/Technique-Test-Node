const { getZodiac } = require("horoscope");

module.exports = {
  getZodiacFromYear: (req, res) => {
    const birthYear = Number(req.params.birthYear);

    if (isNaN(birthYear) || birthYear <= 0 || birthYear > 9999) {
      console.log("Année introuvable");
    } else {
      return res.json({ zodiac: getZodiac(birthYear) });
    }
  },
};
