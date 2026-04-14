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

  // ✅ SAVE LOGIN STATE
  localStorage.setItem('isLoggedIn', 'true');

  document.querySelector('.login-form .btn-primary').textContent = 'Signing in...';

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

// ─────────────────────────────
// Signup Function
// ─────────────────────────────
function doSignup() {
  const name  = document.getElementById('su-name').value.trim();
  const email = document.getElementById('su-email').value.trim();
  const pass  = document.getElementById('su-pass').value.trim();
  const univ  = document.getElementById('su-univ').value.trim();

  const err = document.getElementById('signup-error');
  const suc = document.getElementById('signup-success');

  // ❌ Validation
  if (!name || !email || !pass || !univ) {
    err.textContent = "Please fill all fields.";
    err.style.display = 'block';
    suc.style.display = 'none';
    return;
  }

  if (pass.length < 6) {
    err.textContent = "Password must be at least 6 characters.";
    err.style.display = 'block';
    suc.style.display = 'none';
    return;
  }

  // 📦 Save user data (localStorage)
  const user = {
    name: name,
    email: email,
    password: pass,
    university: univ
  };

  localStorage.setItem('user', JSON.stringify(user));

  // ✅ mark logged in
  localStorage.setItem('isLoggedIn', 'true');

  // UI feedback
  err.style.display = 'none';
  suc.style.display = 'block';

  const btn = document.querySelector('.signup-form .btn-primary');
  btn.textContent = "Creating account...";

  // ⏳ redirect
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1200);
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