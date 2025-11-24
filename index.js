const response = [
  "I'm not saying I'm wrong, but Google disagrees with you.",
  "Error 404: Motivation not found.",  
  "Hang on… calculating… nope, still don't care.", 
  "Plot twist: you were the bug all along.",  
  "I'm sorry, Dave. I'm afraid I can't do that.",  
]

const getRandResponse =() => {
  const randomINdex = Math.floor(Math.random() * response.length);
  return response[randomINdex];
}

const handleUserMessage = (user, question) => {
  if(!user || !question) {
    return 'Error: user and message are required';
  }

  return {
    user: `Hello, ${user}!`,
    question: `You asked: ${question}`,
    botReply: getRandResponse()
  }
};

console.log(handleUserMessage('Alice', 'What is the meaning of life?'));