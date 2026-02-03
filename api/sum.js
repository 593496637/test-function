function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

export default function handler(req, res) {
  const queryA = req.query?.a;
  const queryB = req.query?.b;
  const bodyA = req.body?.a;
  const bodyB = req.body?.b;

  const a = toNumber(queryA ?? bodyA);
  const b = toNumber(queryB ?? bodyB);

  if (a === null || b === null) {
    res.status(400).json({
      error: "Invalid input. Provide numbers a and b via query or JSON body.",
      examples: ["/api/sum?a=1&b=2", "POST /api/sum {\"a\":1,\"b\":2}"],
    });
    return;
  }

  res.status(200).json({
    a,
    b,
    sum: a + b,
  });
}
