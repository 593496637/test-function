export default function handler(req, res) {
  const body =
    req.headers["content-type"]?.includes("application/json") && req.body
      ? req.body
      : null;

  res.status(200).json({
    method: req.method,
    query: req.query,
    body,
  });
}
