function fetchGet(url) {
  return fetch(url).then(res => res.json())
}

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

function fetchAuthorizedGet(url, token) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json())
}

export {
  fetchGet,
  fetchPost,
  fetchAuthorizedGet
}