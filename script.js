const text = "Olá amigo, voce é novo aqui? Me passe seus dados por gentileza, assim posso te ajudar.";
const typingElement = document.getElementById("typingText");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Ajuste o valor para velocidade
    }
}
console.log("Script carregado com sucesso!");

// Inicia o efeito quando a página carrega
window.addEventListener("load", typeText);