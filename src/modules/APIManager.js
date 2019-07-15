const remoteURL = "http://localhost:5002"

    export default {
        get(resource, id) {
          return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
        },
        getAll(resource) {
          return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        },
        removeAndList(resource, id) {
            return fetch(`http://localhost:5002/${resource}/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/${resource }`))
            .then(e => e.json())
        }
      }