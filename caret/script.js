const hiddenInput = document.getElementById("hidden-input");
const fakeInput = document.getElementById("fake-input");

// focus hidden input when user clicks fake input
fakeInput.addEventListener("click", () => {
  hiddenInput.focus();
  render();
});

function render() {
  const text = hiddenInput.value;
  const pos = hiddenInput.selectionStart; // cursor position

  // Split text around caret position
  const before = text.slice(0, pos);
  const after = text.slice(pos);

  // Insert the 🏃 caret at the correct spot
  fakeInput.innerHTML = before + `<span class="caret">🏃</span>` + after;
}

// Update when typing or moving cursor
hiddenInput.addEventListener("input", render);
hiddenInput.addEventListener("keyup", render);
hiddenInput.addEventListener("click", render);

// Initial render
render();
