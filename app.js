const userProfile = {
  name: "Asha Sharma",
  streak: 7,
  points: 2140,
  level: 12,
  badge: "Quiz Master",
  courses: [
    { title: "Full-stack Web UI", category: "Web", progress: 86 },
    { title: "Data Structures Quiz", category: "Quizzes", progress: 72 },
    { title: "AI for Placements", category: "Placement", progress: 40 }
  ],
  recommended: [
    { title: "React Advanced", category: "Frontend", progress: 0 },
    { title: "System Design Sprint", category: "Core", progress: 0 },
    { title: "Interview Prep Lab", category: "Placement", progress: 0 }
  ],
  notifications: [
    { title: "DreamTech is hiring", detail: "Frontend and Backend roles - 5 days left" },
    { title: "Placement workshop", detail: "Session at 6 PM on Friday" }
  ],
  friendRequests: [
    { id: "FR-201", name: "Neha Patel", status: "pending" },
    { id: "FR-593", name: "Rajat Singh", status: "pending" }
  ],
  friends: [
    { name: "Kavya", points: 2210 },
    { name: "Amit", points: 2080 },
    { name: "Mira", points: 1930 }
  ],
  placements: [
    { company: "DreamTech", role: "Frontend Engineer", status: "Applied" },
    { company: "CloudMatrix", role: "Data Analyst", status: "Interview" }
  ],
  experiences: [
    { title: "Completed Full Stack UI", type: "Course", year: 2025 },
    { title: "B.Tech Computer Science", type: "Degree", year: 2024 },
    { title: "Campus Connect Portal", type: "Project", year: 2025 }
  ],
  leaderboard: [
    { rank: 1, name: "Asha Sharma", points: 2140 },
    { rank: 2, name: "Kavya", points: 2210 },
    { rank: 3, name: "Amit", points: 2080 }
  ]
};

const appState = {
  currentPage: "courses"
};

const pageRenderers = {
  courses: renderCourses,
  todo: renderTodo,
  quizzes: renderQuizzes,
  achievements: renderAchievements,
  analysis: renderAnalysis,
  placement: renderPlacement,
  friends: renderFriends,
  profile: renderProfile,
  logout: renderLogout
};

const mainContent = document.getElementById("main-content");
const streakValue = document.getElementById("streak-value");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const profileBtn = document.querySelector(".profile-btn");
const navItems = Array.from(document.querySelectorAll(".nav-item"));

streakValue.textContent = userProfile.streak;

menuToggle.addEventListener("click", () => toggleMenu(true));
menuClose.addEventListener("click", () => toggleMenu(false));
overlay.addEventListener("click", () => toggleMenu(false));
profileBtn.addEventListener("click", () => navigateTo("profile"));
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    const page = navItem.dataset.page;
    navigateTo(page);
    toggleMenu(false);
  });
});

renderPage(appState.currentPage);

function toggleMenu(open) {
  sideMenu.classList.toggle("open", open);
  overlay.classList.toggle("visible", open);
}

function navigateTo(page) {
  appState.currentPage = page;
  setActiveNav(page);
  renderPage(page);
}

function setActiveNav(page) {
  navItems.forEach((navItem) => {
    navItem.classList.toggle("active", navItem.dataset.page === page);
  });
}

function renderPage(page) {
  const renderFn = pageRenderers[page] || renderNotFound;
  mainContent.innerHTML = renderFn();
  attachPageListeners(page);
}

function renderCourses() {
  return `
    <div class="page-heading">
      <div>
        <h1>Courses Dashboard</h1>
        <p class="page-note">Your default learning hub with courses, streak, and placement updates.</p>
      </div>
      <button class="button-primary" onclick="navigateTo('profile')">View Profile</button>
    </div>
    <div class="card alert-card">
      <h2>Placement & hiring alerts</h2>
      ${userProfile.notifications.map((item) => `
        <div class="list-card">
          <div>
            <strong>${item.title}</strong>
            <span>${item.detail}</span>
          </div>
          <span class="badge">New</span>
        </div>
      `).join("")}
    </div>
    <div class="search-bar">
      <input id="course-search" placeholder="Search courses, placement tips, or quizzes" />
      <button class="button-primary">Search</button>
    </div>
    <div class="section-row">
      <div class="section-title">
        <h3>My Courses</h3>
      </div>
      <div class="course-list">
        ${userProfile.courses.map((course) => `
          <div class="course-card">
            <div class="course-info">
              <div class="course-title">${course.title}</div>
              <div class="course-meta">${course.category} - ${course.progress}% complete</div>
              <div class="progress-track"><div class="progress-fill" style="width: ${course.progress}%"></div></div>
            </div>
            <span class="badge">${course.progress}%</span>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="section-row">
      <div class="section-title">
        <h3>Recommended Courses</h3>
      </div>
      <div class="course-list">
        ${userProfile.recommended.map((course) => `
          <div class="course-card">
            <div class="course-info">
              <div class="course-title">${course.title}</div>
              <div class="course-meta">Recommended - ${course.category}</div>
            </div>
            <span class="badge">Start now</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTodo() {
  return `
    <div class="page-heading">
      <div>
        <h1>To Do List</h1>
        <p class="page-note">Track your study tasks, quiz prep, and placement plans.</p>
      </div>
    </div>
    <div class="grid grid-2">
      <div class="card">
        <h2>Today’s tasks</h2>
        <div class="list-card"><div><strong>Review React hooks</strong><span>Complete chapter and notes</span></div><span class="badge">Due today</span></div>
        <div class="list-card"><div><strong>Attempt data structures quiz</strong><span>Score target 80%</span></div><span class="badge">Urgent</span></div>
        <div class="list-card"><div><strong>Update resume</strong><span>Add latest projects and badges</span></div><span class="badge">Optional</span></div>
      </div>
      <div class="card">
        <h2>Study streak</h2>
        <div class="progress-block">
          <div class="progress-label"><span>Consistency</span><strong>7 days</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 88%"></div></div>
          <div class="progress-label"><span>Quiz readiness</span><strong>76%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 76%"></div></div>
        </div>
      </div>
    </div>
  `;
}

function renderQuizzes() {
  return `
    <div class="page-heading">
      <div>
        <h1>Quizzes</h1>
        <p class="page-note">Fake quiz progress and leader insights so the prototype feels real.</p>
      </div>
    </div>
    <div class="grid grid-2">
      <div class="card">
        <h2>Recent quiz summary</h2>
        <div class="list-card"><div><strong>DSA Challenge</strong><span>Score 94%</span></div><span class="badge">Gold</span></div>
        <div class="list-card"><div><strong>React Small Quiz</strong><span>Score 87%</span></div><span class="badge">Silver</span></div>
      </div>
      <div class="card">
        <h2>Upcoming mock tests</h2>
        <div class="list-card"><div><strong>Placement Mock</strong><span>3 attempts left</span></div><span class="badge">Ready</span></div>
        <div class="list-card"><div><strong>Core Java</strong><span>Set goals and attempt</span></div><span class="badge">Try now</span></div>
      </div>
    </div>
  `;
}

function renderAchievements() {
  return `
    <div class="page-heading">
      <div>
        <h1>Achievements</h1>
        <p class="page-note">Display real-looking badges and milestones from your learning journey.</p>
      </div>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <h2>Badges earned</h2>
        <div class="badge-list">
          <span class="badge-pill">Course Complete</span>
          <span class="badge-pill">Quiz Master</span>
          <span class="badge-pill">Big Brain</span>
          <span class="badge-pill">Placement Ready</span>
        </div>
      </div>
      <div class="card">
        <h2>Top achievements</h2>
        <div class="list-card"><div><strong>Higher than friends</strong><span>Score beat 3 friends in quiz</span></div><span class="badge">Quizmaster</span></div>
        <div class="list-card"><div><strong>Completion streak</strong><span>Finished 4 courses this month</span></div><span class="badge">Momentum</span></div>
      </div>
      <div class="card">
        <h2>Progress snapshot</h2>
        <div class="progress-block">
          <div class="progress-label"><span>Courses done</span><strong>72%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 72%"></div></div>
          <div class="progress-label"><span>Quiz completion</span><strong>64%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 64%"></div></div>
        </div>
      </div>
    </div>
  `;
}

function renderAnalysis() {
  return `
    <div class="page-heading">
      <div>
        <h1>Analysis</h1>
        <p class="page-note">Simulation of your learning metrics, trends, and course impact.</p>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stats-card"><strong>2140</strong>Points earned</div>
      <div class="stats-card"><strong>7</strong>Day streak</div>
      <div class="stats-card"><strong>42</strong>Lectures watched</div>
      <div class="stats-card"><strong>5</strong>Courses active</div>
    </div>
    <div class="grid grid-2" style="margin-top:18px;">
      <div class="card">
        <h2>Learning pace</h2>
        <div class="progress-block">
          <div class="progress-label"><span>Last week</span><strong>82%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 82%"></div></div>
          <div class="progress-label"><span>This week</span><strong>91%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 91%"></div></div>
        </div>
      </div>
      <div class="card">
        <h2>Quiz engagement</h2>
        <div class="progress-block">
          <div class="progress-label"><span>Attempted</span><strong>12</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 78%"></div></div>
          <div class="progress-label"><span>Accuracy</span><strong>88%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 88%"></div></div>
        </div>
      </div>
    </div>
  `;
}

function renderPlacement() {
  return `
    <div class="page-heading">
      <div>
        <h1>Placement Cell</h1>
        <p class="page-note">Fake placement pipeline with companies and active hiring updates.</p>
      </div>
    </div>
    <div class="grid grid-2">
      <div class="card">
        <h2>Applied placements</h2>
        ${userProfile.placements.map((item) => `
          <div class="placement-card">
            <div>
              <strong>${item.company}</strong>
              <span>${item.role}</span>
            </div>
            <span class="badge">${item.status}</span>
          </div>
        `).join("")}
      </div>
      <div class="card">
        <h2>Ongoing hiring</h2>
        <div class="list-card"><div><strong>NodeWare</strong><span>Full-stack developer role</span></div><span class="badge">Open</span></div>
        <div class="list-card"><div><strong>Finova</strong><span>Data science intern</span></div><span class="badge">Apply</span></div>
      </div>
    </div>
  `;
}

function renderFriends() {
  return `
    <div class="page-heading">
      <div>
        <h1>Friends</h1>
        <p class="page-note">Accept requests, search by ID, and compare your ranking with pals.</p>
      </div>
    </div>
    <div class="card">
      <div class="search-bar">
        <input id="friend-search" placeholder="Search ID to send request" />
        <button class="send-request">Send</button>
      </div>
      <div class="badge-list">
        ${userProfile.friendRequests.map((request) => `
          <div class="request-card" data-request-id="${request.id}">
            <div>
              <strong>${request.name}</strong>
              <span>ID: ${request.id}</span>
            </div>
            <div class="action-group">
              <button class="accept-btn">Accept</button>
              <button class="decline-btn">Decline</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="section-row">
      <div class="card">
        <h2>Friends progress</h2>
        ${userProfile.friends.map((friend) => `
          <div class="friend-card">
            <div>
              <strong>${friend.name}</strong>
              <span>${friend.points} points</span>
            </div>
            <span class="badge">${friend.points > 2100 ? "Top 5" : "Active"}</span>
          </div>
        `).join("")}
      </div>
      <div class="card">
        <h2>Leaderboard</h2>
        <div class="leaderboard">
          ${userProfile.leaderboard.map((player) => `
            <div class="leader-item">
              <div><strong>#${player.rank}</strong> ${player.name}</div>
              <p>${player.points} pts</p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderProfile() {
  return `
    <div class="page-heading">
      <div>
        <h1>${userProfile.name}</h1>
        <p class="page-note">Profile overview with badges, progress, and your learning achievements.</p>
      </div>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <h2>Profile snapshot</h2>
        <div class="small-card">
          <div>
            <strong>${userProfile.level}</strong>
            <span>Learning level</span>
          </div>
          <span class="badge">${userProfile.badge}</span>
        </div>
        <div class="stats-card" style="margin-top: 16px;">
          <strong>${userProfile.streak}</strong>
          <span>Streak days</span>
        </div>
      </div>
      <div class="card">
        <h2>Course progress</h2>
        <div class="progress-block">
          <div class="progress-label"><span>Courses</span><strong>72%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 72%"></div></div>
          <div class="progress-label"><span>Quizzes</span><strong>64%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 64%"></div></div>
          <div class="progress-label"><span>Lectures</span><strong>82%</strong></div>
          <div class="graph-bar"><div class="graph-fill" style="width: 82%"></div></div>
        </div>
      </div>
      <div class="card">
        <h2>Achievements</h2>
        <div class="badge-list">
          <span class="badge-pill">Quiz Master</span>
          <span class="badge-pill">Big Brain</span>
          <span class="badge-pill">Course Champ</span>
          <span class="badge-pill">Top Scorer</span>
        </div>
      </div>
    </div>
    <div class="section-row">
      <div class="card">
        <h2>Applied placements</h2>
        ${userProfile.placements.map((item) => `
          <div class="placement-card">
            <div>
              <strong>${item.company}</strong>
              <span>${item.role}</span>
            </div>
            <span class="badge">${item.status}</span>
          </div>
        `).join("")}
      </div>
      <div class="card">
        <h2>Experiences</h2>
        ${userProfile.experiences.map((item) => `
          <div class="experience-card">
            <div>
              <strong>${item.title}</strong>
              <span>${item.type} • ${item.year}</span>
            </div>
            <span class="badge">Verified</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLogout() {
  return `
    <div class="page-heading">
      <div>
        <h1>Ready to log out?</h1>
        <p class="page-note">This prototype does not require authorization. Return to the dashboard anytime.</p>
      </div>
    </div>
    <div class="card empty-state">
      <p>Logout is simulated in this demo. Press the button below to go back to the main dashboard.</p>
      <button class="button-primary" onclick="navigateTo('courses')">Back to Courses</button>
    </div>
  `;
}

function renderNotFound() {
  return `
    <div class="page-heading">
      <div>
        <h1>Page not found</h1>
      </div>
    </div>
    <div class="card empty-state">
      <p>The selected page could not be found. Return to the dashboard or open the menu again.</p>
      <button class="button-primary" onclick="navigateTo('courses')">Courses</button>
    </div>
  `;
}

function attachPageListeners(page) {
  if (page === "friends") {
    const searchInput = document.getElementById("friend-search");
    const sendButton = document.querySelector(".send-request");
    if (sendButton && searchInput) {
      sendButton.addEventListener("click", () => {
        const id = searchInput.value.trim();
        if (!id) {
          alert("Enter a friend ID to send request.");
          return;
        }
        alert(`Friend request sent to ${id}!`);
        searchInput.value = "";
      });
    }
    const requestCards = document.querySelectorAll("[data-request-id]");
    requestCards.forEach((card) => {
      const accept = card.querySelector(".accept-btn");
      const decline = card.querySelector(".decline-btn");
      const requestId = card.dataset.requestId;
      accept.addEventListener("click", () => handleRequestAction(card, requestId, true));
      decline.addEventListener("click", () => handleRequestAction(card, requestId, false));
    });
  }
}

function handleRequestAction(card, id, accepted) {
  const name = card.querySelector("strong").textContent;
  card.innerHTML = `<div><strong>${name}</strong><span>${accepted ? "Request accepted" : "Request declined"}</span></div>`;
}
