var messages = document.getElementById("conversa");
var messages2 = document.getElementById("conversa2");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var botao1 = document.getElementById("submit1");
var botao2 = document.getElementById("submit2");

botao1.addEventListener("click", function () {
  var newMessage = document.createElement("ul");
  newMessage.classList.add("emissor");
  var newMessage2 = document.createElement("ul");
  newMessage.classList.add("receptor");
  newMessage.innerHTML = `teste1:${text1.value}`;
  newMessage2.innerHTML = `teste1:${text1.value}`;
  messages2.appendChild(newMessage);
  messages.appendChild(newMessage2);
  text1.value = "";
});

botao2.addEventListener("click", function () {
  var newMessage = document.createElement("lu");
  newMessage.classList.add("emissor");
  var newMessage2 = document.createElement("lu");
  newMessage.classList.add("receptor");
  newMessage.innerHTML = `teste2:${text2.value}`;
  newMessage2.innerHTML = `teste2:${text2.value}`;
  messages.appendChild(newMessage);
  messages2.appendChild(newMessage2);
  text2.value = "";
});

