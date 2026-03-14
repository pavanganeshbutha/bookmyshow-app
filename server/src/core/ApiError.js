class ApiError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(message);
    this.status = 400;
  }
}

class AuthenticationError extends ApiError {
  constructor(message = "Authentication Error") {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  ApiError,
  BadRequestError,
  AuthenticationError,
};
