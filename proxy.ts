Deno.serve(async (req) => {
  const url = new URL(req.url)
  console.log(url);
  return fetch("https://api.openai.com" + url.pathname, {
    method: req.method,
    headers: {
      Authorization: req.headers.get('Authorization'),
      "Content-Type": req.headers.get('Content-Type')
    },
    body: req.body
  })
});
