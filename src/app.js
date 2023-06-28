import "./style.css";

window.onload = () => {
  generateRandomCard();
};

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
    "King",
    "Queen",
    "Jack",
    "Ace"
  ];

  // Generate random indices for suit and value arrays
  let suitIndex = Math.floor(Math.random() * suits.length);
  let valueIndex = Math.floor(Math.random() * values.length);

  // Get the card element
  let card = document.querySelector(".card");

  // Remove existing suit class
  card.classList.remove("heart", "spade", "club", "diamond");

  // Add the new suit class based on the random index
  card.classList.add(suits[suitIndex]);

  // Set the card value based on the random index
  document.querySelector(".number").textContent = values[valueIndex];
}
