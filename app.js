// ═══════════════════════════════════
// app.js — EduTrack Core Logic (NO AUTH)
// ═══════════════════════════════════

// ── Page titles map ──────────────────
const PAGE_TITLES = {
  dashboard:    'Dashboard',
  courses:      'Courses',
  todo:         'To-do list',
  quizzes:      'Quizzes',
  achievements: 'Achievements',
  analysis:     'Analysis',
  placement:    'Placement cell',
  friends:      'Friends',
  profile:      'Profile',
};

// ── Navigation (Page Switching) ──────
function showPage(id, el) {

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
  });
  if (el) el.classList.add('active');

  const title = document.getElementById('page-title');
  if (title) {
    title.textContent = PAGE_TITLES[id] || id;
  }

  document.getElementById('notif-panel')?.classList.remove('open');
}

// ── Sidebar toggle ───────────────────
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('hidden');
}

// ── Notification panel ───────────────
function toggleNotif() {
  document.getElementById('notif-panel')?.classList.toggle('open');
}

// ── Close notification on outside click
document.addEventListener('click', function (e) {
  const panel = document.getElementById('notif-panel');

  if (
    panel &&
    !e.target.closest('.notif-btn') &&
    !e.target.closest('.notif-panel')
  ) {
    panel.classList.remove('open');
  }
});

// ── Todo checkbox toggle ─────────────
function toggleTodo(el) {
  el.classList.toggle('done');
  el.textContent = el.classList.contains('done') ? '✓' : '';
  el.nextElementSibling?.classList.toggle('done');

  saveTodos();
}

// ── Save Todos 💾
function saveTodos() {
  const todos = [];

  document.querySelectorAll('.todo-item').forEach(item => {
    const text = item.querySelector('.todo-text').textContent;
    const done = item.querySelector('.todo-check').classList.contains('done');

    todos.push({ text, done });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}

// ── Load Todos 🔄
function loadTodos() {
  const data = JSON.parse(localStorage.getItem('todos')) || [];

  const container = document.getElementById('page-todo');
  if (!container || data.length === 0) return;

  const html = data.map(t => `
    <div class="todo-item">
      <div class="todo-check ${t.done ? 'done' : ''}" onclick="toggleTodo(this)">
        ${t.done ? '✓' : ''}
      </div>
      <div class="todo-text ${t.done ? 'done' : ''}">${t.text}</div>
      <div class="todo-due">${t.done ? 'Done' : 'Pending'}</div>
    </div>
  `).join('');

  container.innerHTML = `<div class="section-title">Today's tasks</div>` + html;
}

// ── Course Search 🔍
document.addEventListener('input', function (e) {

  if (e.target.matches('.search-bar input')) {
    const search = e.target.value.toLowerCase();

    document.querySelectorAll('.course-card').forEach(card => {
      const title = card.querySelector('.course-title')?.textContent.toLowerCase() || '';
      const meta  = card.querySelector('.course-meta')?.textContent.toLowerCase() || '';

      card.style.display =
        (title.includes(search) || meta.includes(search)) ? 'block' : 'none';
    });
  }

});

// ── Play YouTube 🎥
function playCourse(videoId) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('ytPlayer');

  if (modal && player) {
    modal.style.display = 'flex';
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
}

// ── Close video
function closeVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('ytPlayer');

  if (modal && player) {
    modal.style.display = 'none';
    player.src = '';
  }
}

// ── Page Load Setup ──────────────────
window.onload = () => {
  showPage('dashboard');
  loadTodos();
};