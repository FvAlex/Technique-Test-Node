const request = require('supertest')
const app = require('../index')
const { INCORRECT_MONTH, INCORRECT_DAY, INCORRECT_YEAR } = require('./../src/errors/errorCodes')

describe('Astrologic Sign', () => {
  it('should return an astrologic sign with a birthdate', async () => {
    return request(app)
      .get('/api/sign/02/17')
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toStrictEqual({ astrologicalSign: 'Aquarius' })
      })
  })

  it('should return an error as invalid month', async () => {
    return request(app)
      .get('/api/sign/error/17')
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(500)
      .then((res) => {
        expect(res.statusCode).toBe(500)
        expect(res.body).toStrictEqual({ error: INCORRECT_MONTH.message })
      })
  })

  it('should return an error as invalid day', async () => {
    return request(app)
      .get('/api/sign/12/error')
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(500)
      .then((res) => {
        expect(res.statusCode).toBe(500)
        expect(res.body).toStrictEqual({ error: INCORRECT_DAY.message })
      })
  })
})

describe('Zodiac Sign', () => {
  it('should return a zodiac with a birth year', async () => {
    return request(app)
      .get('/api/zodiac/2015')
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toStrictEqual({ zodiac: 'Goat' })
      })
  })

  it('should return an error as invalid year', async () => {
    return request(app)
      .get('/api/zodiac/error')
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(500)
      .then((res) => {
        expect(res.statusCode).toBe(500)
        expect(res.body).toStrictEqual({ error: INCORRECT_YEAR.message })
      })
  })
})
