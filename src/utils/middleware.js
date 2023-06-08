export function RequestLogger(request, _response, nextFunction) {
  console.log("METHOD", request.method);
  console.log("PATH", request.path);
  console.log("BODY", request.body);
  console.log("---");
  nextFunction();
}

export function UnknownEndpoint(_request, response) {
  return response.status(404).send({ error: "Unknown Endpoint" });
}

export function ErrorHandler(error, _request, response, nextFunction) {
  console.error(error.message);

  if (error.name == "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name == "ValidationError") {
    return response.status(400).json({ message: error.message });
  } else if (error.name == "JsonWebTokenError") {
    return response.status(401).json({ message: "invalid token" });
  } else if (error.name == "TokenExpiredError") {
    return response.status(401).json({ message: "token expired" });
  }

  nextFunction(error);
}
