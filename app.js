// ═══════════════════════════════════
// app.js — EduTrack FULL LOGIC 🔥
// ═══════════════════════════════════

// ── Page titles ─────────────────────
const PAGE_TITLES = {
  dashboard: 'Dashboard',
  courses: 'Courses',
  todo: 'To-do list',
  quizzes: 'Quizzes',
  achievements: 'Achievements',
  analysis: 'Analysis',
  placement: 'Placement cell',
  friends: 'Friends',
  profile: 'Profile',
};

// ── Page Switching ──────────────────
function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  document.getElementById('page-' + id)?.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');

  document.getElementById('page-title').textContent = PAGE_TITLES[id] || id;

  document.getElementById('notif-panel')?.classList.remove('open');
}

// ── Sidebar ─────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('hidden');
}

// ── Notifications ───────────────────
function toggleNotif() {
  document.getElementById('notif-panel')?.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.notif-btn') && !e.target.closest('.notif-panel')) {
    document.getElementById('notif-panel')?.classList.remove('open');
  }
});

// ═══════════════════════════════════
// 📝 TODO SYSTEM
// ═══════════════════════════════════

function toggleTodo(el) {
  el.classList.toggle('done');
  el.textContent = el.classList.contains('done') ? '✓' : '';
  el.nextElementSibling.classList.toggle('done');
  saveTodos();
}

function saveTodos() {
  const todos = [];
  document.querySelectorAll('.todo-item').forEach(item => {
    todos.push({
      text: item.querySelector('.todo-text').textContent,
      done: item.querySelector('.todo-check').classList.contains('done')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const data = JSON.parse(localStorage.getItem('todos')) || [];
  if (!data.length) return;

  const container = document.getElementById('page-todo');

  container.innerHTML = `
    <div class="section-title">Today's tasks</div>
    ${data.map(t => `
      <div class="todo-item">
        <div class="todo-check ${t.done ? 'done' : ''}" onclick="toggleTodo(this)">
          ${t.done ? '✓' : ''}
        </div>
        <div class="todo-text ${t.done ? 'done' : ''}">${t.text}</div>
        <div class="todo-due">${t.done ? 'Done' : 'Pending'}</div>
      </div>
    `).join('')}
  `;
}

// ═══════════════════════════════════
// 🏆 ACHIEVEMENTS SYSTEM
// ═══════════════════════════════════

function unlockAchievement(name) {
  let unlocked = JSON.parse(localStorage.getItem('achievements')) || [];

  if (!unlocked.includes(name)) {
    unlocked.push(name);
    localStorage.setItem('achievements', JSON.stringify(unlocked));
    alert("🏆 Achievement unlocked: " + name);
  }
}

// Example trigger
function checkAchievements() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  if (todos.filter(t => t.done).length >= 5) {
    unlockAchievement("Task Master");
  }
}

// ═══════════════════════════════════
// 💼 PLACEMENT SYSTEM
// ═══════════════════════════════════

function applyJob(company) {
  let applied = JSON.parse(localStorage.getItem('appliedJobs')) || [];

  if (!applied.includes(company)) {
    applied.push(company);
    localStorage.setItem('appliedJobs', JSON.stringify(applied));
    alert("✅ Applied to " + company);
  } else {
    alert("Already applied!");
  }
}

// ═══════════════════════════════════
// 📊 ANALYSIS SYSTEM
// ═══════════════════════════════════

function updateAnalysis() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  const completed = todos.filter(t => t.done).length;
  const total = todos.length;

  console.log("Progress:", completed + "/" + total);

  // You can later connect this to charts
}

// ═══════════════════════════════════
// 👥 FRIEND SYSTEM
// ═══════════════════════════════════

function addFriend(name) {
  let friends = JSON.parse(localStorage.getItem('friends')) || [];

  friends.push(name);
  localStorage.setItem('friends', JSON.stringify(friends));

  alert("🤝 Friend added: " + name);
}

function loadFriends() {
  const friends = JSON.parse(localStorage.getItem('friends')) || [];

  const list = document.querySelector('.friends-list');
  if (!list) return;

  list.innerHTML = friends.map(f => `
    <div class="friend-item">
      <div class="friend-av">${f[0]}</div>
      <div class="friend-name">${f}</div>
    </div>
  `).join('');
}

// ═══════════════════════════════════
// 🎥 YOUTUBE PLAYER
// ═══════════════════════════════════

function playCourse(videoId) {
  document.getElementById('videoModal').style.display = 'flex';
  document.getElementById('ytPlayer').src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

function closeVideo() {
  document.getElementById('videoModal').style.display = 'none';
  document.getElementById('ytPlayer').src = '';
}

// ═══════════════════════════════════
// 🔍 SEARCH
// ═══════════════════════════════════

document.addEventListener('input', (e) => {
  if (e.target.matches('.search-bar input')) {
    const search = e.target.value.toLowerCase();

    document.querySelectorAll('.course-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(search) ? 'block' : 'none';
    });
  }
});

// ═══════════════════════════════════
// 🚀 INIT
// ═══════════════════════════════════

window.onload = () => {
  showPage('dashboard');
  loadTodos();
  loadFriends();
  updateAnalysis();
  checkAchievements();
};