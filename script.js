const Advice = document.querySelector('.advice');
const DiceIcon = document.querySelector('.dice-icon');
const AdviceId = document.querySelector('#advice-id');
const AdviceText = document.querySelector('.advice-text');
DiceIcon.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice', { cache: "no-cache" })
        .then(response => response.json())
        .then(data => {
            AdviceId.textContent = data.slip.id
            AdviceText.textContent = `"${data.slip.advice}"`;
            AdviceText.classList.add('.advice');
            speakText(data.slip.advice); 
        });
});
function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
}