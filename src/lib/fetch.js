function fetchPost(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
}

export {
  fetchPost
}