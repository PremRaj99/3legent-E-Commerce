export default function responseHandler(statusCode = 200, data = [], message = "Success") {
  return {
    success: statusCode < 400,
    statusCode,
    data,
    message,
  };
}