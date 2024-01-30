class CustomError extends Error {
  constructor(error) {
    super()
    this.message = error.message
    this.status_code = error.status_code
  }
}

module.exports = CustomError
