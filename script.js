const motives = [
   "Ești cel mai bun prieten al meu!",
   "Îmi faci mereu ziua mai frumoasă!",
   "Îți pasă cu adevărat de mine.",
   "Zâmbetul tău mă face fericită!",
   "Avem cele mai frumoase amintiri împreună.",
   "Îmi dai întotdeauna sfaturi bune.",
   "Râdem atât de mult împreună!",
   "Mă înțelegi chiar și fără cuvinte.",
   "Mă sprijini necondiționat.",
   "Îmi aduci ciocolată când sunt tristă! 🍫",
   // Adaugă aici până la 100 motive!
];
const startButton = document.getElementById("start");
const motivList = document.getElementById("motiv-list");
const finalMessage = document.getElementById("final-message");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
let index = 0;
startButton.addEventListener("click", function () {
   startButton.style.display = "none";
   showMotives();
});
function showMotives() {
   if (index < motives.length) {
       const li = document.createElement("li");
       li.textContent = motives[index];
       motivList.appendChild(li);
       index++;
       setTimeout(showMotives, 1000); // Afișează un motiv pe secundă
   } else {
       finalMessage.classList.remove("hidden");
   }
}
yesButton.addEventListener("click", function () {
   alert("Claudiu, ai acceptat! ❤️");
});
noButton.addEventListener("click", function () {
   alert("Oh nu... 😢 Dar te iubesc oricum!");
});
