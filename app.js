// ═══════════════════════════════════
// app.js — EduTrack core logic
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

// ── Navigation ───────────────────────
function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');

  document.getElementById('page-title').textContent = PAGE_TITLES[id] || id;
  document.getElementById('notif-panel').classList.remove('open');
}

// ── Sidebar toggle ────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('hidden');
}

// ── Notification panel ────────────────
function toggleNotif() {
  document.getElementById('notif-panel').classList.toggle('open');
}

// Close notif panel on outside click
document.addEventListener('click', function (e) {
  const panel = document.getElementById('notif-panel');
  if (!e.target.closest('.notif-btn') && !e.target.closest('.notif-panel')) {
    panel?.classList.remove('open');
  }
});

// ── Todo checkbox toggle ──────────────
function toggleTodo(el) {
  el.classList.toggle('done');
  el.textContent = el.classList.contains('done') ? '✓' : '';
  el.nextElementSibling?.classList.toggle('done');
}