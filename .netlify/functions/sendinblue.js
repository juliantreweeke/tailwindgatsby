exports.handler = async (event, context, callback) => {
    console.log(event);
    const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
    try {
      console.log('trying');
      let response = await fetch("https://api.sendinblue.com/v3/contacts", 
    {
     credentials: 'same-origin',
     method: event.httpMethod,
     headers: {
       "Content-Type": "application/json",
       "api-key":`${process.env.SEND_IN_BLUE_API_KEY}`,
    },
     body: event.body
    })
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


  // const handleSubmit = (e) => {
    //   const data = {
    //       email
    //      }   
    //   fetch(`https://api.sendinblue.com/v3/contacts`, {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json",
    //       "api-key":`${process.env.SEND_IN_BLUE_API_KEY}`,
    //    },
    //     body: JSON.stringify(data)
    //   })
    //   .then(() => alert(`Form Sent!`))
    //   .catch(error => alert(error))
    //   e.preventDefault();
    //  }






  //   module.exports.handler = (event, context, callback) => {

  //     const formData = JSON.parse(event.body);
  //     const email = formData.email;
  //     let errorMessage = null;
  
  //     if (!formData) {
  //         errorMessage = "No form data supplied";
  //         console.log(errorMessage);
  //         callback(errorMessage);
  //     }
  
  //     if (!email) {
  //         errorMessage = "No EMAIL supplied";
  //         console.log(errorMessage);
  //         callback(errorMessage);
  //     }
  
  //     const subscriber = JSON.stringify(data);
  //     console.log("Sending data to sendinblue", subscriber);
      
  //     {
  //       credentials: 'same-origin',
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         "api-key":`${process.env.SEND_IN_BLUE_API_KEY}`,
  //      },
  //       body: event.body
  //      })
     
      
  // };

  
  // module.exports.handler = (event, context, callback) => {
  
  //     const formData = JSON.parse(event.body);
  //     const email = formData.email;
  //     let errorMessage = null;
  
  //     if (!formData) {
  //         errorMessage = "No form data supplied";
  //         console.log(errorMessage);
  //         callback(errorMessage);
  //     }
  
  //     if (!email) {
  //         errorMessage = "No EMAIL supplied";
  //         console.log(errorMessage);
  //         callback(errorMessage);
  //     }
  
  //     const subscriber = JSON.stringify(formData);
  //     console.log("Sending data to sendinBlue", subscriber);

  //     fetch(`https://api.sendinblue.com/v3/contacts`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "api-key":`${process.env.SEND_IN_BLUE_API_KEY}`,
  //    },
  //     body: subscriber
  //   })
  //   .then(response => callback(null, {statusCode: 200, body: JSON.stringify(response)})
  //   .catch(error => callback(error))
  //  };



  // callback(null, {statusCode: 200, body: JSON.stringify(res)