import fetch from 'node-fetch'
const apiKey = 'AIzaSyBUyz2XOfuvynMjxJBYEbSmNlrmXQmTMSU'
const origin = 'https://fullstack.edu.vn'
const url = 'https://fullstack.edu.vn/blog'

const crUXApiUtil = {}
crUXApiUtil.API_KEY = apiKey
crUXApiUtil.API_ENDPOINT = `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${crUXApiUtil.API_KEY}`
crUXApiUtil.query = function (requestBody) {
  // if (crUXApiUtil.API_KEY == apiKey) {
  //   throw `Replace ${apiKey} with your private CrUX API key. Get a key at https://goo.gle/crux-api-key.`
  // }
  return fetch(crUXApiUtil.API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(requestBody)
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response)
      }
      return response
    })
}

// gọi api
crUXApiUtil
  .query({
    url
  })
  .then((response) => {
    console.log(JSON.stringify(response, null, 4))
  })
  .catch((response) => {
    console.error(response)
  })
