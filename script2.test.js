const fetch = require('node-fetch');

const swapi = require('./script2');

/* //Opeion-1-Asynchronou: using done() to complete the test.
it ('calls swapi to get people', (done) => {
   expect.assertions(1)
   swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(82)
      done()
   })
})
*/

/* //Opeion-2-Asynchronou: using return to complete the test. Need to always return
*/
it ('calls swapi to get people', () => {
   expect.assertions(1)
   return swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(82)
      
   })
})


it ('calls swapi to get people with a promise', () => {
   expect.assertions(2)
   return swapi.getPeoplePromise(fetch).then(data => {
      console.log(data.results)
      expect(data.count).toEqual(82)
      expect(data.results.length).toBeGreaterThan(5)
   })
})

//Mock testing
it('getPeople return count and results', () => {
   const mockFetch = jest.fn()
      .mockReturnValue(Promise.resolve ({
         json: () => Promise.resolve({
            count: 82,
            results: [0,1,2,3,4,5]
         })
   }))
   expect.assertions(4)
   return swapi.getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
      expect(data.count).toEqual(82);
      expect(data.results.length).toBeGreaterThan(5);
   })
})