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

// ── Navigation (Page Switching) ──────
function showPage(id, el) {

  // hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  // show selected page
  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');

  // update sidebar active state
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
  });
  if (el) el.classList.add('active');

  // update title
  const title = document.getElementById('page-title');
  if (title) {
    title.textContent = PAGE_TITLES[id] || id;
  }

  // close notifications if open
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

// close notification on outside click
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
}

// ── Course Search (LIVE FILTER) 🔍 ───
document.addEventListener('input', function (e) {

  if (e.target.matches('.search-bar input')) {
    const search = e.target.value.toLowerCase();

    document.querySelectorAll('.course-card').forEach(card => {
      const title = card.querySelector('.course-title')?.textContent.toLowerCase();
      const meta  = card.querySelector('.course-meta')?.textContent.toLowerCase();

      if (title.includes(search) || meta.includes(search)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

});

// ── Page Load Setup ──────────────────
window.onload = () => {
  showPage('dashboard');
};

// ── Play YouTube video inside app 🎥
function playCourse(videoId) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('ytPlayer');

  modal.style.display = 'flex';
  player.src = `https://www.youtube.com/embed/${videoId}`;
}

// ── Close video
function closeVideo() {
  document.getElementById('videoModal').style.display = 'none';
  document.getElementById('ytPlayer').src = '';
}
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}