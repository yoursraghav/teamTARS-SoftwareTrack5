// ─────────────────────────────
// Tab Switching
// ─────────────────────────────
function switchTab(t) {
  document.querySelectorAll('.tab').forEach((el, i) =>
    el.classList.toggle('active', i === (t === 'login' ? 0 : 1))
  );

  document.querySelector('.login-form').style.display =
    t === 'login' ? 'block' : 'none';

  document.querySelector('.signup-form').style.display =
    t === 'signup' ? 'block' : 'none';

  const h = document.querySelector('.right h2');
  const s = document.querySelector('.right .sub');

  if (t === 'login') {
    h.textContent = 'Welcome back';
    s.textContent = 'Sign in to continue your learning streak 🔥';
  } else {
    h.textContent = 'Join EduTrack';
    s.textContent = 'Start your adaptive learning journey today';
  }
}

// ─────────────────────────────
// Login Function
// ─────────────────────────────
function doLogin() {
  const e = document.getElementById('login-email').value;
  const p = document.getElementById('login-pass').value;
  const err = document.getElementById('login-error');

  if (!e || !p) {
    err.style.display = 'block';
    return;
  }

  err.style.display = 'none';
  document.querySelector('.login-form .btn-primary').textContent =
    'Signing in...';

  setTimeout(() => {
    window.location.href = 'EduTrack_Modern.html';
  }, 1200);
}

// ─────────────────────────────
// Signup Function
// ─────────────────────────────
function doSignup() {
  const n = document.getElementById('su-name').value;
  const e = document.getElementById('su-email').value;
  const p = document.getElementById('su-pass').value;
  const u = document.getElementById('su-univ').value;

  const err = document.getElementById('signup-error');
  const suc = document.getElementById('signup-success');

  if (!n || !e || !p || !u) {
    err.style.display = 'block';
    suc.style.display = 'none';
    return;
  }

  err.style.display = 'none';
  suc.style.display = 'block';

  document.querySelector('.signup-form .btn-primary').textContent =
    'Creating account...';

  setTimeout(() => {
    window.location.href = 'EduTrack_Modern.html';
  }, 1500);
}

// ─────────────────────────────
// Password Strength Checker
// ─────────────────────────────
function checkStrength(v) {
  const bar = document.getElementById('strength-bar');
  const fill = document.getElementById('strength-fill');

  bar.style.display = 'block';

  let s = 0;
  if (v.length >= 8) s++;
  if (/[A-Z]/.test(v)) s++;
  if (/[0-9]/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;

  const widths = ['25%', '50%', '75%', '100%'];
  const colors = ['#f87171', '#fbbf24', '#60a5fa', '#34d399'];

  fill.style.width = v.length ? widths[s - 1] || '10%' : '0';
  fill.style.background = v.length ? colors[s - 1] || '#f87171' : '';
}

// ─────────────────────────────
// Default Load
// ─────────────────────────────
window.onload = () => {
  switchTab('login');
};