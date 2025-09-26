let progress = 0;

function updateProgress() {
  progress++;
  document.getElementById("progress").textContent =
    "Your progress: " + progress + "/4";

  if (progress === 4) {
    document.getElementById("message").textContent =
      "🎉 Congratulations! You mastered the Box Model!";
  }
}

// 🟦 Add Margin
function addMargin() {
  let box = document.getElementById("box");
  if (!box.classList.contains("margin-added")) {
    box.classList.add("margin-added");
    box.textContent = "Margin added!";
    updateProgress();
  }
}

// ⬛ Add Border
function addBorder() {
  let box = document.getElementById("box");
  if (!box.classList.contains("border-added")) {
    box.classList.add("border-added");
    box.textContent = "Border added!";
    updateProgress();
  }
}

// 🟨 Add Padding
function addPadding() {
  let box = document.getElementById("box");
  if (!box.classList.contains("padding-added")) {
    box.classList.add("padding-added");
    box.textContent = "Padding added!";
    updateProgress();
  }
}

// 📦 Resize Box
function resizeBox() {
  let box = document.getElementById("box");
  if (!box.classList.contains("resized")) {
    box.classList.add("resized");
    box.textContent = "Resized!";
    updateProgress();
  }
}

