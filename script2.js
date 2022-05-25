const fetch = require('node-fetch');


const getPeoplePromise = fetch => {
   return fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
         // console.log('Data received: ',data);
         return {
            count: data.count,
            results: data.results
         }
      })
}
// getPeoplePromise(fetch)


const getPeople = async (fetch) => {
   const getRequest = await fetch('https://swapi.dev/api/people')
   const data = await getRequest.json();
   // console.log('Data received: ', data);
   return {
      count: data.count,
      results: data.results
   }
}
// getPeople(fetch)

module.exports = {
   getPeople,
   getPeoplePromise
}