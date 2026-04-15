const allCourses = [
  { id: 1, title: "Python Basics", emoji: "🐍", category: "Backend", youtube: "ix9cRaBkVe0", duration: 3600 },
  { id: 2, title: "Java Programming", emoji: "☕", category: "Backend", youtube: "xTtL8E4LzTQ", duration: 4200 },
  { id: 3, title: "Web Development", emoji: "🌐", category: "Frontend", youtube: "xND0t1pr3KY", duration: 5400 },
  { id: 4, title: "Data Structures", emoji: "📊", category: "Core", youtube: "-TkoO8Z07hI", duration: 6000 },
  { id: 5, title: "Operating System", emoji: "⚙️", category: "Core", youtube: "wxznTygnRfQ", duration: 4800 },
  { id: 6, title: "DBMS", emoji: "🧠", category: "Database", youtube: "CBYHwZcbD-s", duration: 5100 },
  { id: 7, title: "Computer Networks", emoji: "🔗", category: "Core", youtube: "HGTJBPNC-Gw", duration: 4500 },
  { id: 8, title: "JavaScript", emoji: "⚡", category: "Frontend", youtube: "lfmg-EJ8gm4", duration: 4200 },
  { id: 9, title: "React JS", emoji: "🧩", category: "Frontend", youtube: "CgkZ7MvWUAA", duration: 5700 },
  { id: 10, title: "SQL", emoji: "🗄️", category: "Database", youtube: "c2M-rlkkT5o", duration: 3900 },
  { id: 11, title: "Machine Learning", emoji: "🤖", category: "AI", youtube: "5OdVJbNCSso", duration: 6300 },
  { id: 12, title: "System Design", emoji: "🚀", category: "Advanced", youtube: "zZ6vybT1HQs", duration: 5400 }
];

const badgesAvailable = [
  { id: "python_master", name: "Python Master", icon: "🐍", requirement: "Complete Python Basics course" },
  { id: "web_wizard", name: "Web Wizard", icon: "🌐", requirement: "Complete Web Development course" },
  { id: "database_guru", name: "Database Guru", icon: "🗄️", requirement: "Complete SQL and DBMS courses" },
  { id: "algo_pro", name: "Algo Pro", icon: "📊", requirement: "Score 80%+ in Data Structures" },
  { id: "react_rockstar", name: "React Rockstar", icon: "⚛️", requirement: "Complete React JS course" },
  { id: "ml_maven", name: "ML Maven", icon: "🤖", requirement: "Complete Machine Learning course" },
  { id: "system_architect", name: "System Architect", icon: "🏗️", requirement: "Complete System Design course" },
  { id: "video_viewer", name: "Video Viewer", icon: "🎬", requirement: "Watch 10 hours of videos" },
  { id: "quiz_champion", name: "Quiz Champion", icon: "🏆", requirement: "Score 90%+ in 5 quizzes" },
  { id: "learning_streak", name: "Learning Streak", icon: "🔥", requirement: "7-day consecutive learning" }
];

const userProfile = {
  name: "Asha Sharma",
  streak: 7,
  points: 2140,
  level: 12,
  mainBadge: "Quiz Master",
  courses: [
    { id: 3, title: "Web Development", category: "Frontend", progress: 86, watched: 2700, youtube: "xND0t1pr3KY" },
    { id: 4, title: "Data Structures", category: "Core", progress: 72, watched: 3600, youtube: "-TkoO8Z07hI" },
    { id: 11, title: "Machine Learning", category: "AI", progress: 40, watched: 1260, youtube: "5OdVJbNCSso" }
  ],
  recommended: [
    { id: 9, title: "React JS", category: "Frontend", progress: 0, watched: 0, youtube: "CgkZ7MvWUAA" },
    { id: 12, title: "System Design", category: "Advanced", progress: 0, watched: 0, youtube: "zZ6vybT1HQs" },
    { id: 11, title: "Interview Prep Lab", category: "Placement", progress: 0 }
  ],
  badges: ["video_viewer", "learning_streak", "quiz_champion"],
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
    { title: "Completed Web Development", type: "Course", year: 2025 },
    { title: "B.Tech Computer Science", type: "Degree", year: 2024 },
    { title: "Campus Connect Portal", type: "Project", year: 2025 }
  ],
  leaderboard: [
    { rank: 1, name: "Asha Sharma", points: 2140 },
    { rank: 2, name: "Kavya", points: 2210 },
    { rank: 3, name: "Amit", points: 2080 }
  ]
};

function initializeVideoTracking() {
  if (!localStorage.getItem("videoTracking")) {
    const tracking = {};
    allCourses.forEach((course) => {
      tracking[course.youtube] = { watched: 0, lastWatched: null };
    });
    localStorage.setItem("videoTracking", JSON.stringify(tracking));
  }
}

function getVideoProgress(youtubeId) {
  initializeVideoTracking();
  const tracking = JSON.parse(localStorage.getItem("videoTracking")) || {};
  return tracking[youtubeId] || { watched: 0, lastWatched: null };
}

function updateVideoProgress(youtubeId, secondsWatched) {
  initializeVideoTracking();
  const tracking = JSON.parse(localStorage.getItem("videoTracking")) || {};
  tracking[youtubeId] = {
    watched: (tracking[youtubeId]?.watched || 0) + secondsWatched,
    lastWatched: new Date().toISOString()
  };
  localStorage.setItem("videoTracking", JSON.stringify(tracking));
}

function getBadgeInfo(badgeId) {
  return badgesAvailable.find((b) => b.id === badgeId) || null;
}

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
  initializeVideoTracking();
  const myCourseIds = userProfile.courses.map((c) => c.id);
  const recommendedIds = userProfile.recommended.map((c) => c.id);
  
  return `
    <div class="page-heading">
      <div>
        <h1>Courses Dashboard</h1>
        <p class="page-note">Browse all courses with HD videos. Your progress is tracked automatically.</p>
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
      <input id="course-search" placeholder="Search courses..." />
      <button class="button-primary">Search</button>
    </div>
    
    <div class="section-row">
      <div class="section-title">
        <h3>My Courses</h3>
      </div>
      <div class="courses-grid">
        ${userProfile.courses.map((course) => {
          const fullCourse = allCourses.find((c) => c.id === course.id);
          const videoProgress = getVideoProgress(fullCourse?.youtube || "");
          const watchedMinutes = Math.floor(videoProgress.watched / 60);
          return `
            <div class="video-card">
              <div class="video-thumb">${fullCourse?.emoji || "📚"}</div>
              <div class="video-body">
                <div class="video-title">${course.title}</div>
                <div class="video-meta">${fullCourse?.category || course.category}</div>
                <div class="video-time">Watched: ${watchedMinutes} / ${Math.floor(fullCourse?.duration / 60)} min</div>
                <div class="progress-track"><div class="progress-fill" style="width: ${course.progress}%"></div></div>
              </div>
              <button class="button-primary" onclick="openCourseVideo('${fullCourse?.youtube}', '${course.title}')">Watch</button>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    
    <div class="section-row">
      <div class="section-title">
        <h3>All Courses (${allCourses.length})</h3>
      </div>
      <div class="courses-grid">
        ${allCourses.map((course) => {
          const videoProgress = getVideoProgress(course.youtube);
          const watchedMinutes = Math.floor(videoProgress.watched / 60);
          const isEnrolled = myCourseIds.includes(course.id);
          return `
            <div class="video-card">
              <div class="video-thumb">${course.emoji}</div>
              <div class="video-body">
                <div class="video-title">${course.title}</div>
                <div class="video-meta">${course.category}</div>
                <div class="video-time">${watchedMinutes} / ${Math.floor(course.duration / 60)} min watched</div>
              </div>
              <button class="button-primary" onclick="openCourseVideo('${course.youtube}', '${course.title}')">View</button>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    
    <div id="video-modal" class="video-modal hidden">
      <div class="video-modal-content">
        <button class="video-modal-close" onclick="closeCourseVideo()">✕</button>
        <div class="video-player">
          <iframe id="video-player" width="100%" height="500" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-info">
          <h2 id="video-title"></h2>
          <p id="video-time"></p>
          <div class="action-group">
            <button class="button-primary" onclick="markVideoWatched()">Log 10 Min Watch</button>
            <button class="button-secondary" onclick="closeCourseVideo()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openCourseVideo(youtubeId, title) {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const titleEl = document.getElementById("video-title");
  const timeEl = document.getElementById("video-time");
  
  player.src = `https://www.youtube.com/embed/${youtubeId}`;
  titleEl.textContent = title;
  
  const videoProgress = getVideoProgress(youtubeId);
  const watchedMin = Math.floor(videoProgress.watched / 60);
  timeEl.textContent = `Watched: ${watchedMin} minutes • Last watched: ${videoProgress.lastWatched ? new Date(videoProgress.lastWatched).toLocaleDateString() : "Never"}`;
  
  modal.classList.remove("hidden");
  modal.dataset.videoId = youtubeId;
}

function closeCourseVideo() {
  const modal = document.getElementById("video-modal");
  modal.classList.add("hidden");
  document.getElementById("video-player").src = "";
}

function markVideoWatched() {
  const modal = document.getElementById("video-modal");
  const youtubeId = modal.dataset.videoId;
  updateVideoProgress(youtubeId, 600);
  alert("10 minutes logged! Keep learning!");
  closeCourseVideo();
  renderPage("courses");
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
  const earnedBadges = userProfile.badges.map((badgeId) => getBadgeInfo(badgeId)).filter(Boolean);
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
        <h2>Earned Badges (${earnedBadges.length})</h2>
        <div class="badge-list">
          ${earnedBadges.map((badge) => `
            <span class="badge-pill" title="${badge.requirement}">${badge.icon} ${badge.name}</span>
          `).join("")}
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
        <h2>Experiences & Certifications</h2>
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
