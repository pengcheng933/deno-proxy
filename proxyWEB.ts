Deno.serve(async (req) => {
  const url = new URL(req.url)
  return fetch("https://openai.com" + url.pathname, {
    method: req.method,
    headers: req.headers,
    body: req.body
  })
});
