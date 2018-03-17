
const api = "http://192.168.1.57:3001"

// Generate a unique token for storing data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
	'Authorization': token
}

/*-------------Categories------------- */
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

/*-------------Posts------------- */
export const getByCategory = (category) =>
	fetch(`${api}/${category}/posts`, { headers })
		.then(res => res.json())
		.then(data => data)

export const getAll = () =>
	fetch(`${api}/posts`, { headers })
		.then(res => res.json())
		.then(data => data)

export const add = (post) =>
	fetch(`${api}/posts`, {
		method: 'POST',
		headers: {
			...headers
		},
		body: JSON.stringify({post})
	})
	.then(res => res.json())
	.then(data => data)

