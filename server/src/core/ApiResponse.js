class ApiResponse {
  constructor(success, message, data) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static build(success, message, data) {
    return new ApiResponse(success, message, data);
  }
}

module.exports = ApiResponse;
