function enviarMail(){
	  
	  Email.send({
      Host: "smtp-mail.outlook.com",
      Username: "e.javier2019@outlook.es",
      Password: "Bringmetolife3",
      To: 'xavierescobar3335@gmail.com',
      From: "e.javier2019@outlook.es",
      Subject: "Hola",
      Body: "Como estas?"
    }).then(message => alert(message));
  }
    
