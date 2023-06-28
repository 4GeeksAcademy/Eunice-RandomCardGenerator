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

  // Generate random indices for suit and value arrays
  let suitIndex = Math.floor(Math.random() * suits.length);
  let valueIndex = Math.floor(Math.random() * values.length);

  // Get the card element
  let card = document.querySelector(".card");

  // Remove existing suit class
  card.classList.remove("heart", "spade", "club", "diamond");

  // Add the new suit class based on the random index
  card.classList.add(suits[suitIndex]);

  switch (suits[suitIndex]) {
    case "heart":
      suitSymbol = "&hearts;";
      suitColor = getRandomColor(["black", "red"]);
      break;
    case "spade":
      suitSymbol = "&spades;";
      suitColor = getRandomColor(["black", "red"]);
      break;
    case "club":
      suitSymbol = "&clubs;";
      suitColor = getRandomColor(["black", "red"]);
      break;
    case "diamond":
      suitSymbol = "&diams;";
      suitColor = getRandomColor(["black", "red"]);
      break;
  }

  // Set the suit symbol for the card
  document.querySelectorAll(".suits").forEach(suit => {
    suit.innerHTML = suitSymbol;
    suit.style.color = suitColor;
  });

  // Set the card value color based on the random index
  document.querySelector(".number").textContent = values[valueIndex];
  document.querySelector(".number").style.color = suitColor;
}
