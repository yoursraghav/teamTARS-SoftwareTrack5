// 🧠 FAKE DATABASE
function getUserData() {
  return JSON.parse(localStorage.getItem("userData")) || {
    hearts: 10,
    streak: 0,
    purchases: [],
    badges: [],
    totalCorrect: 0
  };
}

function saveUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

// ✅ CORRECT ANSWER
function correctAnswer() {
  let user = getUserData();

  user.hearts += 1;
  user.totalCorrect += 1;
  user.streak += 1;

  checkBadges(user);

  saveUserData(user);
  updateUI();
}

// ❌ WRONG ANSWER
function wrongAnswer() {
  let user = getUserData();

  if (user.hearts > 0) {
    user.hearts -= 1;
  }

  user.streak = 0; // streak breaks

  saveUserData(user);
  updateUI();
}

// 🏆 BADGE LOGIC
function checkBadges(user) {

  // First correct answer
  if (user.totalCorrect >= 1 && !user.badges.includes("Beginner")) {
    user.badges.push("Beginner");
    alert("🏆 Badge Unlocked: Beginner!");
  }

  // 10 correct answers
  if (user.totalCorrect >= 10 && !user.badges.includes("Learner")) {
    user.badges.push("Learner");
    alert("🏆 Badge Unlocked: Learner!");
  }

  // 25 correct answers
  if (user.totalCorrect >= 25 && !user.badges.includes("Pro Solver")) {
    user.badges.push("Pro Solver");
    alert("🏆 Badge Unlocked: Pro Solver!");
  }

  // Streak badge
  if (user.streak >= 5 && !user.badges.includes("Consistency King")) {
    user.badges.push("Consistency King");
    alert("🔥 Badge Unlocked: Consistency King!");
  }
}

// 🛒 BUY AVATAR ONLY
function buyItem(itemName, cost) {
  let user = getUserData();

  if (user.hearts >= cost) {
    user.hearts -= cost;

    if (!user.purchases.includes(itemName)) {
      user.purchases.push(itemName);
      alert(`✅ ${itemName} unlocked!`);
    } else {
      alert("⚠️ Already owned!");
    }
  } else {
    alert("❌ Not enough hearts!");
  }

  saveUserData(user);
  updateUI();
}

// 🔄 UPDATE UI
function updateUI() {
  let user = getUserData();

  document.getElementById("hearts").innerText = user.hearts;
  document.getElementById("streak").innerText = user.streak;

  document.getElementById("inventory").innerText =
    user.purchases.join(", ") || "No avatars yet";

  document.getElementById("badges").innerText =
    user.badges.join(", ") || "No badges yet";
}