var messages = document.getElementById("conversa");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var botao1 = document.getElementById("submit1");
var botao2 = document.getElementById("submit2");

botao1.addEventListener("click", function () {
  var newMessage = document.createElement("ul");
  newMessage.innerHTML = text1.value;
  messages.appendChild(newMessage);
  text1.value = "";
});

botao2.addEventListener("click", function () {
  var newMessage = document.createElement("lu");
  newMessage.innerHTML = text2.value;
  messages.appendChild(newMessage);
  text2.value = "";
});

