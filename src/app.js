import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  generateRandomCard();
  document.querySelector("#button").addEventListener("click", () => {
    generateRandomCard();
  });
});

function generateRandomCard() {
  let suits = ["heart", "spade", "club", "diamond"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  let suitSymbol;
  let suitColor;

  // Random indices for suit and value arrays
  let suitIndex = Math.floor(Math.random() * suits.length);
  let valueIndex = Math.floor(Math.random() * values.length);

  // Card element
  let card = document.querySelector(".card");

  // Remove existing suit class
  card.classList.remove("heart", "spade", "club", "diamond");

  // New suit class based on the random index
  card.classList.add(suits[suitIndex]);

  switch (suits[suitIndex]) {
    case "heart":
      suitSymbol = "&hearts;";
      break;
    case "spade":
      suitSymbol = "&spades;";
      break;
    case "club":
      suitSymbol = "&clubs;";
      break;
    case "diamond":
      suitSymbol = "&diams;";
      break;
  }

  // Suit symbol and color for the card
  suitColor = getRandomColor(["black", "red"]);
  document.querySelectorAll(".suits").forEach(suit => {
    suit.innerHTML = suitSymbol;
    suit.style.color = suitColor;
  });

  // Card value and color based on the random index
  document.querySelector(".number").textContent = values[valueIndex];
  document.querySelector(".number").style.color = suitColor;
}
