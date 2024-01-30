const { getZodiac, getSign } = require("horoscope");

module.exports = {
  getZodiacFromYear: (req, res) => {
    try {
      const birthYear = Number(req.params.birthYear);

      if (isNaN(birthYear) || birthYear <= 0 || birthYear > 9999) {
        console.log("Année introuvable");
      } else {
        return res.json({ zodiac: getZodiac(birthYear) });
      }
    } catch (e) {
      console.log("erreur :" + e);
    }
  },
  getAstrologicalSignFromMonthAndDay: (req, res) => {
    try {
      const birthMonth = Number(req.params.birthMonth);
      const birthDay = Number(req.params.birthDay);

      if (isNaN(birthMonth) || birthMonth < 0 || birthMonth > 12) {
        console.log("Le mois est invalide");
      } else if (isNaN(birthDay) || birthDay < 0 || birthDay > 31) {
        console.log("Le jours est invalide");
      } else {
        return res.json({
          astrologicalSign: getSign({ month: birthMonth, day: birthDay }),
        });
      }
    } catch (e) {
      console.log("erreur: " + e);
    }
  },
};
