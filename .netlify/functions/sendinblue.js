exports.handler = async (event, context, callback) => {
    const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
    try {
      let response = await fetch("https://api.sendinblue.com/v3/contacts", 
    {
    mode: `cors`,
     credentials: `same-origin`,
     method: event.httpMethod,
     headers: {
       "Content-Type": "application/json",
        "api-key": `${process.env.SEND_IN_BLUE_API_KEY}`,
    },
     body: event.body
    })
    debugger;
     let data = await response.json()
     console.log('sign up! ', data)
     await pass(data)
   } catch(err) {
     console.log('error with email sign up'. err)
       let error = {
         statusCode: err.statusCode || 500,
         body: JSON.stringify({error: err.message})
    }
    await pass(error)
   }
  }




