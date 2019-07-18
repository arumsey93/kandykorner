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
        },
        delete(id) {
          return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
          })
          .then(e => e.json())
        },
        post(resource, newThing) {
          return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newThing)
          }).then(data => data.json())
        },
        put(editedAnimal) {
          return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
          }).then(data => data.json());
        }
      }