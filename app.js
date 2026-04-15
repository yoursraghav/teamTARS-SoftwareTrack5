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

const avatarCatalog = [
  { id: "common-dino-1", name: "Sunny Rex", tier: "common", cost: 0, file: "Avatar Common.png", col: 0, row: 0, cols: 2, rows: 2 },
  { id: "common-dino-2", name: "Lavender Rex", tier: "common", cost: 0, file: "Avatar Common.png", col: 1, row: 0, cols: 2, rows: 2 },
  { id: "common-dino-3", name: "Music Rex", tier: "common", cost: 0, file: "Avatar Common.png", col: 0, row: 1, cols: 2, rows: 2 },
  { id: "common-dino-4", name: "Boba Rex", tier: "common", cost: 0, file: "Avatar Common.png", col: 1, row: 1, cols: 2, rows: 2 },
  { id: "rare-dino-1", name: "Sleepy Blue", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 0, row: 0, cols: 4, rows: 2 },
  { id: "rare-dino-2", name: "Agent Amber", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 1, row: 0, cols: 4, rows: 2 },
  { id: "rare-dino-3", name: "Flare Rex", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 2, row: 0, cols: 4, rows: 2 },
  { id: "rare-dino-4", name: "Skull Guard", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 3, row: 0, cols: 4, rows: 2 },
  { id: "rare-dino-5", name: "Lime Fang", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 0, row: 1, cols: 4, rows: 2 },
  { id: "rare-dino-6", name: "Cape Tide", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 1, row: 1, cols: 4, rows: 2 },
  { id: "rare-dino-7", name: "Violet Bite", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 2, row: 1, cols: 4, rows: 2 },
  { id: "rare-dino-8", name: "Golden Roar", tier: "rare", cost: 50, file: "Avatars Rare.png", col: 3, row: 1, cols: 4, rows: 2 },
  { id: "legendary-dino-1", name: "Frost Titan", tier: "legendary", cost: 100, file: "Avatar Legendary.png", col: 0, row: 0, cols: 2, rows: 2 },
  { id: "legendary-dino-2", name: "Nebula Scout", tier: "legendary", cost: 100, file: "Avatar Legendary.png", col: 1, row: 0, cols: 2, rows: 2 },
  { id: "legendary-dino-3", name: "Crown Inferno", tier: "legendary", cost: 100, file: "Avatar Legendary.png", col: 0, row: 1, cols: 2, rows: 2 },
  { id: "legendary-dino-4", name: "Phantom Bone", tier: "legendary", cost: 100, file: "Avatar Legendary.png", col: 1, row: 1, cols: 2, rows: 2 }
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
    { id: 8, title: "JavaScript", category: "Frontend", progress: 95, watched: 4200, youtube: "lfmg-EJ8gm4" },
    { id: 10, title: "SQL", category: "Database", progress: 88, watched: 3000, youtube: "c2M-rlkkT5o" },
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

const courseMapping = {
  "Python Basics": "python",
  "JavaScript": "js",
  "Web Development": "html_css",
  "SQL": "sql"
};

if (typeof QuibotPlatform !== 'undefined') {
  QuibotPlatform.state.watchHistory = {};
  userProfile.courses.forEach(course => {
    const courseName = courseMapping[course.title];
    if (courseName) QuibotPlatform.state.watchHistory[courseName] = course.watched;
  });
  QuibotPlatform.state.enrolledCourses = userProfile.courses.map(c => courseMapping[c.title]).filter(Boolean);
  QuibotPlatform.state.selectedCourses = QuibotPlatform.state.enrolledCourses;
}

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

  if (page === "placement") {
    mainContent.innerHTML = '<div class="loading" style="padding: 50px; text-align: center;">Loading placement dashboard...</div>';
    renderFn()
      .then((html) => {
        mainContent.innerHTML = html;
        attachPageListeners(page);
      })
      .catch((error) => {
        console.error("Error loading placement page:", error);
        mainContent.innerHTML = renderNotFound();
      });
    return;
  }

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
        <p class="page-note">Quiz progress and leader insights for realistic experience.</p>
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

async function renderPlacement() {
  const jobs = await API.getJobs();
  const applications = await API.getApplications();
  const completedCourses = userProfile.courses.filter((course) => course.progress >= 80);
  const recommendedCourses = await API.getRecommendedCourses(completedCourses);

  return `
    <div class="page-heading">
      <div>
        <h1>Placement Dashboard</h1>
        <p class="page-note">Track your career readiness and discover exciting opportunities.</p>
      </div>
      <div class="resume-upload">
        <input type="file" id="resume-upload" accept=".pdf,.doc,.docx" style="display: none;">
        <button class="button-primary" onclick="document.getElementById('resume-upload').click()">
          📄 Upload Resume
        </button>
        <span id="resume-status">No resume uploaded</span>
      </div>
    </div>

    <div class="section-row">
      <div class="card recommendations-card animated-card">
        <div class="card-glow"></div>
        <h2>Recommended Courses</h2>
        <div class="recommendations-list">
          ${recommendedCourses.map((courseName) => {
            const course = allCourses.find((item) => item.title === courseName);
            if (!course) {
              return "";
            }
            return `
              <div class="recommendation-item">
                <div class="course-icon">${course.emoji}</div>
                <div class="course-details">
                  <div class="course-title">${course.title}</div>
                  <div class="course-category">${course.category}</div>
                </div>
                <button class="enroll-btn" onclick="navigateTo('courses')">Enroll</button>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>

    <div class="section-row">
      <div class="card animated-card">
        <div class="card-glow"></div>
        <div class="section-title">
          <h3>Application Tracker</h3>
          <button class="view-all">View All</button>
        </div>
        <div class="application-list">
          ${applications.map((app) => `
            <div class="application-card">
              <div class="application-info">
                <div class="application-company">${app.company}</div>
                <div class="application-role">${app.role}</div>
                <div class="application-date">Applied ${new Date(app.appliedDate).toLocaleDateString()}</div>
              </div>
              <div class="application-status status-${app.status.toLowerCase()}">
                ${app.status}
              </div>
              <div class="application-actions">
                <button class="action-btn" onclick="viewApplicationDetails(${app.id})">View Details</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="section-row">
      <div class="card animated-card">
        <div class="card-glow"></div>
        <div class="section-title">
          <h3>Active Hiring Drives</h3>
          <button class="view-all">View All</button>
        </div>
        <div class="hiring-drives">
          ${jobs.slice(0, 3).map((job) => `
            <div class="drive-card">
              <div class="drive-header">
                <div class="drive-logo">${job.logo}</div>
                <div class="drive-company-info">
                  <div class="drive-company">${job.company}</div>
                  <div class="drive-deadline">${Math.max(0, Math.ceil((new Date(job.deadline) - new Date()) / (1000 * 60 * 60 * 24)))} days left</div>
                </div>
              </div>
              <div class="drive-role">${job.role}</div>
              <div class="drive-details">
                <span>📍 ${job.location}</span>
                <span>💰 ${job.salary}</span>
                <span>🏢 ${job.openings} openings</span>
              </div>
              <div class="drive-skills">
                ${job.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
              </div>
              <button class="apply-btn" onclick="applyForJob(${job.id})">
                Apply Now
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <div id="application-modal" class="modal-overlay hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h3 id="modal-title">Application Details</h3>
          <button class="modal-close" onclick="closeApplicationModal()">✕</button>
        </div>
        <div id="modal-body" class="modal-body"></div>
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
          <span class="badge">${userProfile.mainBadge}</span>
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
        <p class="page-note">Your progress will be saved. Return anytime.</p>
      </div>
    </div>
    <div class="card empty-state">
      <p>Click the button below to log out and return to the dashboard.</p>
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

  if (page === "placement") {
    const resumeUpload = document.getElementById("resume-upload");
    if (resumeUpload) {
      resumeUpload.addEventListener("change", handleResumeUpload);
    }

    const savedResume = localStorage.getItem("userResume");
    if (savedResume) {
      const resumeData = JSON.parse(savedResume);
      const resumeStatus = document.getElementById("resume-status");
      if (resumeStatus) {
        resumeStatus.textContent = `Uploaded: ${resumeData.name}`;
      }
    }

    const modal = document.getElementById("application-modal");
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeApplicationModal();
        }
      });
    }
  }
}

function handleRequestAction(card, id, accepted) {
  const name = card.querySelector("strong").textContent;
  card.innerHTML = `<div><strong>${name}</strong><span>${accepted ? "Request accepted" : "Request declined"}</span></div>`;
}

function handleResumeUpload(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  const fileName = file.name.toLowerCase();
  const isValidResume = fileName.includes("resume");

  if (!allowedTypes.includes(file.type)) {
    alert("Please upload a PDF or Word document.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("File size must be less than 5MB.");
    return;
  }

  if (!isValidResume) {
    alert('Please upload a file with "resume" in the filename.');
    const resumeData = {
      name: file.name,
      size: file.size,
      type: file.type,
      data: null,
      uploadedAt: new Date().toISOString(),
      isValid: false
    };
    localStorage.setItem("userResume", JSON.stringify(resumeData));
    document.getElementById("resume-status").textContent = `Uploaded: ${file.name}`;
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const resumeData = {
      name: file.name,
      size: file.size,
      type: file.type,
      data: e.target.result,
      uploadedAt: new Date().toISOString(),
      isValid: true
    };
    localStorage.setItem("userResume", JSON.stringify(resumeData));
    document.getElementById("resume-status").textContent = `Uploaded: ${file.name}`;
    alert("Resume uploaded successfully!");
  };
  reader.readAsDataURL(file);
}

async function viewApplicationDetails(applicationId) {
  const applications = await API.getApplications();
  const application = applications.find((app) => app.id === applicationId);

  if (!application) {
    alert("Application not found.");
    return;
  }

  const job = await API.getJobById(application.jobId);
  const modal = document.getElementById("application-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  modalTitle.textContent = `${application.company} - ${application.role}`;
  modalBody.innerHTML = `
    <div class="application-details">
      <div class="detail-section">
        <h4>Application Information</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">Company:</span>
            <span class="detail-value">${application.company}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Role:</span>
            <span class="detail-value">${application.role}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Applied Date:</span>
            <span class="detail-value">${new Date(application.appliedDate).toLocaleDateString()}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Status:</span>
            <span class="detail-value status-${application.status.toLowerCase()}">${application.status}</span>
          </div>
        </div>
      </div>
      ${job ? `
        <div class="detail-section">
          <h4>Job Details</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">Location:</span>
              <span class="detail-value">${job.location}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Salary:</span>
              <span class="detail-value">${job.salary}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Openings:</span>
              <span class="detail-value">${job.openings}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Deadline:</span>
              <span class="detail-value">${new Date(job.deadline).toLocaleDateString()}</span>
            </div>
          </div>
          <div class="skills-section">
            <span class="detail-label">Required Skills:</span>
            <div class="skill-tags">
              ${job.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
            </div>
          </div>
        </div>
      ` : ""}
      <div class="detail-section">
        <h4>Application Notes</h4>
        <p>${application.notes || "No additional notes provided."}</p>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function closeApplicationModal() {
  const modal = document.getElementById("application-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

async function applyForJob(jobId) {
  const applied = await API.applyForJob(jobId);
  const job = await API.getJobById(jobId);

  if (!job) {
    alert("Application link not available for this job.");
    return;
  }

  window.open(job.applyLink, "_blank", "noopener,noreferrer");

  if (!applied) {
    alert("You already applied for this role. Opening the job page again.");
    return;
  }

  alert(`Application started for ${job.company}!`);
  renderPage("placement");
}
