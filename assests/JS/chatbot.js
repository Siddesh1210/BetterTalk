  let botMessages=["1.Is there anyone in your life who can support you and be there for you?",
    "2.How were you feeling lately?",
    "3.Have you been sleeping well?",
    "4.Have you been worried or anxious lately?",
    "5.Are you enjoying your daily activities and hobbies?",
    "6.Have you been feeling like you have a good support system in place?",
    "7.Are you having any thoughts of self-harm or suicide?",
    "8.How do you usually handle stress and negative emotions?",
    "9.Have you talked to anyone about how you are feeling?",
    "10.With whom do you share your feelings?",
    "Thankyou for using our service"
  ]

let userAnswers=[];
let count=0;
let index=0;
function sendMessage() {
const input = document.getElementById("user-input");
const message = input.value;
            if(count<=10)
            {
                if(message !="x" && message != "X")
            {
                if(count!=0)
                {
                    userAnswers.push(message);
                }
                if (message !== "") {
                    const chatbotBody = document.querySelector(".chatbot-body");
                    const userMessage = document.createElement("div");
                    userMessage.className = "chatbot-message user";
                    userMessage.innerHTML = `
                    <p>${message}</p>
                    `;
                    chatbotBody.appendChild(userMessage);
                    input.value = "";
                
                    setTimeout(() => {
                    const botMessage = document.createElement("div");
                    botMessage.className = "chatbot-message bot";
                    botMessage.innerHTML = `
                        <p>${botMessages[index]}</p>
                    `;
                    index++;
                    chatbotBody.appendChild(botMessage);
                    chatbotBody.scrollTop = chatbotBody.scrollHeight;
                    }, 1000);
                }
                }
                else{
                    window.open('/')
                }
                count++;
            }

      if(count==11)
            {
              // alert(userAnswers[3]);
              // alert(userAnswers[6]);
              // console.log(typeof(userAnswers[3])+" "+typeof(userAnswers[6]))
              // alert(typeof(userAnswers[3]))
              // alert(typeof(userAnswers[6]))
              // alert("Hii");
              // console.log(userAnswers);
              async function checkDepression(){
                const response = await fetch(`http://localhost:8000/check-depression?a=${userAnswers[0]}&b=${userAnswers[1]}&c=${userAnswers[2]}&d=${userAnswers[3]}&e=${userAnswers[4]}&f=${userAnswers[5]}&g=${userAnswers[6]}&i=${userAnswers[8]}`)
                const data = await response.json()
                // console.log("RESPONSE", response)
                console.log("DATA", data)
                // botMessages.push(data['result']);
                // alert(data['result'])
                // botMessages.push(data['result']);
                const chatbotBody = document.querySelector(".chatbot-body");
                    const botMessage = document.createElement("div");
                    botMessage.className = "chatbot-message bot";
                    botMessage.innerHTML = `
                        <p>${data['result']}</p>
                    `;
                chatbotBody.appendChild(botMessage)
                    // setbotMessages([...botMessages, data['result']])
                // botMessages.push(data['result']);
              }   
              checkDepression()
            }
}
  
  const input = document.getElementById("user-input");
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("button").click();
    }
  });
  

  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbotContainer = document.getElementById("chatbot-containerId");
  
  chatbotIcon.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chatbot-show");
  });
  
  const chatbotIcon2 = document.getElementById("chatbot-icon2");
  chatbotIcon2.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chatbot-show");
  });

  const chatbotIcon3 = document.getElementById("chatbot-icon3");
  chatbotIcon3.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chatbot-show");
  });

  const chatbotIcon4 = document.getElementById("chatbot-icon4");
  chatbotIcon4.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chatbot-show");
  });
  