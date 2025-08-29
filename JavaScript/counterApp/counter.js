// Get elements
const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

// Update UI
function updateCounter() {
  countEl.textContent = count;

  // Optional: Change color dynamically
  if (count > 0) {
    countEl.style.color = "#22c55e"; // green
  } else if (count < 0) {
    countEl.style.color = "#ef4444"; // red
  } else {
    countEl.style.color = "#4f46e5"; // default purple
  }
}

// Event Listeners
increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Initialize
updateCounter();
