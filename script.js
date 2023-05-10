function makeRequest(company) {
   return new Promise((resolve, reject) => {
      console.log(`Making request to ${company}`)
      if (company === 'Google') {
         resolve('Google says hi')
      } else {
         reject('We can only talk to Google')
      }
   })
}

function processMakeRequest(externalResponse) {
   return new Promise((resolve, reject) => {
      console.log('Processing response')
      resolve(`Extra Information + ${externalResponse}`)
   })
}

// makeRequest('Google')
//    .then((responseFromMakeRequest) => {
//       console.log('Response received')
//       return processMakeRequest(
//          responseFromMakeRequest /* мы передаем resolve от makeRequest */
//       )
//    })
//    .then((finalResponse) => {
//       console.log(finalResponse)
//    })
//    .catch((err) => {
//       console.log(err)
//    })

// const doWork = async () => {
//    try {
//       const responseFromMakeRequest = await makeRequest('Google')
//       console.log('Response received')
//       const finalResponse = await processMakeRequest(
//          responseFromMakeRequest
//       )
//       console.log(finalResponse)
//    } catch (err) {
//       console.log(err)
//    }
// }
// doWork()

async function doWork() {
   try {
      const responseFromMakeRequest = await makeRequest('Google')
      console.log('Response received')
      const finalResponse = await processMakeRequest(responseFromMakeRequest)
      console.log(finalResponse)
   } catch (err) {
      console.log(err)
   }
}
doWork()
