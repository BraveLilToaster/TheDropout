const headers = {
  JSON: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

const request = {
  get: url => {
    return fetch(url, {headers: headers.JSON})
      .then((res) => res.json())
      .then((data) => {
        return data
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      })
  },
  post: (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: headers.JSON,
      body: JSON.stringify(body)
    })
      .then(res => res)
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      })
  }
}

const bandsInTown = {
  getTourDates: request.get('https://rest.bandsintown.com/artists/The%20Dropout/events?app_id=58bda2c225994f623449601f29621745'),
}

export {
  bandsInTown,
}
