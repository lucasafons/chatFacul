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
  newMessage2.classList.add("receptor");
  newMessage2.innerHTML = `<strong>teste1:</strong> ${text1.value}`;
  newMessage.innerHTML = `${text1.value} <strong>:teste1</strong>`;
  messages2.appendChild(newMessage);
  messages.appendChild(newMessage2);
  text1.value = "";
});

botao2.addEventListener("click", function () {
  var newMessage = document.createElement("ul");
  newMessage.classList.add("emissor");
  var newMessage2 = document.createElement("ul");
  newMessage2.classList.add("receptor");
  newMessage2.innerHTML = `<strong>teste2:</strong> ${text2.value}`;
  newMessage.innerHTML = `${text2.value} <strong>:teste2</strong>`;
  messages.appendChild(newMessage);
  messages2.appendChild(newMessage2);
  text2.value = "";
});