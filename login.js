// Authentication and form handling
const authMessage = document.getElementById('auth-message');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const forgotForm = document.getElementById('forgot-form');

// Tab switching
const authTabs = document.querySelectorAll('.auth-tab');
authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const panelId = tab.dataset.panel;
    switchPanel(panelId);
  });
});

// Link button handlers
document.getElementById('show-forgot').addEventListener('click', (e) => {
  e.preventDefault();
  switchPanel('forgot-panel');
});

document.getElementById('show-signup').addEventListener('click', (e) => {
  e.preventDefault();
  switchPanel('signup-panel');
});

document.getElementById('back-to-login').addEventListener('click', (e) => {
  e.preventDefault();
  switchPanel('login-panel');
});

// Switch between panels
function switchPanel(panelId) {
  // Hide all panels
  document.querySelectorAll('.auth-panel').forEach(panel => {
    panel.classList.add('hidden');
  });
  
  // Remove active state from tabs
  authTabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected panel
  document.getElementById(panelId).classList.remove('hidden');
  
  // Add active state to corresponding tab
  const activeTab = document.querySelector(`[data-panel="${panelId}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Clear message
  clearMessage();
}

// Show message
function showMessage(text, type = 'info') {
  authMessage.textContent = text;
  authMessage.className = `auth-message ${type}`;
  authMessage.classList.remove('hidden');
}

// Clear message
function clearMessage() {
  authMessage.classList.add('hidden');
  authMessage.textContent = '';
}

// Validate user ID format (alphanumeric or 10 digit phone)
function isValidIdentifier(id) {
  const phoneRegex = /^\d{10}$/;
  const userIdRegex = /^[a-zA-Z0-9_]{3,}$/;
  return phoneRegex.test(id) || userIdRegex.test(id);
}

// Validate password strength
function isValidPassword(password) {
  return password.length >= 6;
}

// Login form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const identifier = document.getElementById('login-identifier').value.trim();
  const password = document.getElementById('login-password').value;
  
  // Validation
  if (!identifier) {
    showMessage('Please enter User ID or phone number', 'error');
    return;
  }
  
  if (!isValidIdentifier(identifier)) {
    showMessage('Invalid User ID or phone number format', 'error');
    return;
  }
  
  if (!password) {
    showMessage('Please enter password', 'error');
    return;
  }
  
  // Demo credentials check
  if (identifier === 'asha_sharma' && password === 'asha@123') {
    showMessage('Login successful! Redirecting...', 'success');
    localStorage.setItem('user', JSON.stringify({ id: identifier, name: 'Asha Sharma' }));
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
    return;
  }
  
  // For demo purposes, accept any valid format
  try {
    // Simulate API call
    const response = await simulateLoginAPI(identifier, password);
    if (response.success) {
      showMessage('Login successful! Redirecting...', 'success');
      localStorage.setItem('user', JSON.stringify(response.user));
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      showMessage(response.message || 'Invalid credentials', 'error');
    }
  } catch (error) {
    showMessage('Login failed. Please try again.', 'error');
    console.error('Login error:', error);
  }
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('signup-name').value.trim();
  const userId = document.getElementById('signup-id').value.trim();
  const phone = document.getElementById('signup-phone').value.trim();
  const password = document.getElementById('signup-password').value;
  
  // Validation
  if (!name) {
    showMessage('Please enter your full name', 'error');
    return;
  }
  
  if (!userId || userId.length < 3) {
    showMessage('User ID must be at least 3 characters', 'error');
    return;
  }
  
  if (!/^\d{10}$/.test(phone)) {
    showMessage('Please enter a valid 10-digit phone number', 'error');
    return;
  }
  
  if (!isValidPassword(password)) {
    showMessage('Password must be at least 6 characters', 'error');
    return;
  }
  
  try {
    // Simulate API call
    const response = await simulateSignupAPI({ name, userId, phone, password });
    if (response.success) {
      showMessage('Account created successfully! Logging in...', 'success');
      localStorage.setItem('user', JSON.stringify(response.user));
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      showMessage(response.message || 'Signup failed', 'error');
    }
  } catch (error) {
    showMessage('Signup failed. Please try again.', 'error');
    console.error('Signup error:', error);
  }
});

// Forgot password form submission
forgotForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const identifier = document.getElementById('forgot-identifier').value.trim();
  
  if (!identifier) {
    showMessage('Please enter User ID or phone number', 'error');
    return;
  }
  
  if (!isValidIdentifier(identifier)) {
    showMessage('Invalid User ID or phone number format', 'error');
    return;
  }
  
  try {
    // Simulate API call
    const response = await simulateForgotPasswordAPI(identifier);
    if (response.success) {
      showMessage('Temporary password sent to your registered contact!', 'success');
      setTimeout(() => {
        document.getElementById('forgot-identifier').value = '';
        switchPanel('login-panel');
      }, 2000);
    } else {
      showMessage(response.message || 'Could not find account', 'error');
    }
  } catch (error) {
    showMessage('Request failed. Please try again.', 'error');
    console.error('Forgot password error:', error);
  }
});

// Simulate API calls (replace with actual backend calls)
function simulateLoginAPI(identifier, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          id: identifier,
          name: 'User',
          loginTime: new Date().toISOString()
        }
      });
    }, 500);
  });
}

function simulateSignupAPI(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          id: data.userId,
          name: data.name,
          phone: data.phone,
          createdAt: new Date().toISOString()
        }
      });
    }, 500);
  });
}

function simulateForgotPasswordAPI(identifier) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Check your registered contact for temporary password'
      });
    }, 500);
  });
}

// Check if user is already logged in
function checkAuth() {
  const user = localStorage.getItem('user');
  if (user) {
    // User is logged in, could redirect or show logout option
    console.log('User already logged in:', JSON.parse(user));
  }
}

// Initialize
checkAuth();
