const quizBotState = {
  quizOpen: false
};

const QuibotPlatform = {
  availableCourses: [
    'python',
    'java',
    'c',
    'cpp',
    'dsa',
    'html_css',
    'react',
    'mongodb',
    'sql',
    'php'
  ],
  courseNames: {
    python: 'Python',
    java: 'Java',
    c: 'C Language',
    cpp: 'C++ Language',
    dsa: 'Data Structures & Algorithms',
    html_css: 'HTML & CSS',
    react: 'React',
    mongodb: 'MongoDB',
    sql: 'SQL',
    php: 'PHP'
  },
  knowledgeBase: [
    { id: 'py1', course: 'python', type: 'mcq', text: 'Which keyword prints text in Python?', options: ['print', 'echo', 'cout', 'Console.Write'], correct: 'print', difficulty: 1, timestamp: 0, explanation: 'Python uses the print() function.' },
    { id: 'py2', course: 'python', type: 'mcq', text: 'What data type is created by [] in Python?', options: ['tuple', 'list', 'dict', 'set'], correct: 'list', difficulty: 1, timestamp: 0, explanation: '[] creates a list.' },
    { id: 'py3', course: 'python', type: 'typing', text: 'Write the Python expression to create a variable count with value 10.', expected: 'count = 10', difficulty: 2, timestamp: 0, explanation: 'Use assignment with =.' },
    { id: 'java1', course: 'java', type: 'mcq', text: 'Which keyword starts a class declaration in Java?', options: ['function', 'class', 'struct', 'module'], correct: 'class', difficulty: 1, timestamp: 0, explanation: 'Java uses class to declare a class.' },
    { id: 'java2', course: 'java', type: 'mcq', text: 'What is the entry method for a Java console app?', options: ['main', 'start', 'run', 'begin'], correct: 'main', difficulty: 1, timestamp: 0, explanation: 'Java programs start from main().' },
    { id: 'java3', course: 'java', type: 'typing', text: 'Write the declaration for an integer variable named total.', expected: 'int total;', difficulty: 2, timestamp: 0, explanation: 'Java uses int for integer variables.' },
    { id: 'c1', course: 'c', type: 'mcq', text: 'Which header is required for printf in C?', options: ['<stdio.h>', '<stdlib.h>', '<string.h>', '<math.h>'], correct: '<stdio.h>', difficulty: 1, timestamp: 0, explanation: 'printf is defined in stdio.h.' },
    { id: 'c2', course: 'c', type: 'mcq', text: 'What is the correct syntax to declare an array of 5 ints?', options: ['int arr[5];', 'int arr = 5;', 'array<int> arr;', 'int arr();'], correct: 'int arr[5];', difficulty: 1, timestamp: 0, explanation: 'Arrays use brackets in C.' },
    { id: 'c3', course: 'c', type: 'typing', text: 'Write a C statement that assigns 20 to a variable named value.', expected: 'value = 20;', difficulty: 2, timestamp: 0, explanation: 'Use assignment with =.' },
    { id: 'cpp1', course: 'cpp', type: 'mcq', text: 'Which operator is used for scope resolution in C++?', options: ['::', '->', '.', '%%'], correct: '::', difficulty: 1, timestamp: 0, explanation: ':: is the C++ scope resolution operator.' },
    { id: 'cpp2', course: 'cpp', type: 'mcq', text: 'Which keyword declares a constant in C++?', options: ['const', 'let', 'var', 'static'], correct: 'const', difficulty: 1, timestamp: 0, explanation: 'const declares a constant.' },
    { id: 'cpp3', course: 'cpp', type: 'typing', text: 'Write a C++ statement that declares an int named score and sets it to 50.', expected: 'int score = 50;', difficulty: 2, timestamp: 0, explanation: 'Use int with initialization.' },
    { id: 'dsa1', course: 'dsa', type: 'mcq', text: 'Which data structure follows FIFO order?', options: ['Stack', 'Queue', 'Tree', 'Graph'], correct: 'Queue', difficulty: 1, timestamp: 0, explanation: 'Queue is first-in-first-out.' },
    { id: 'dsa2', course: 'dsa', type: 'mcq', text: 'Which algorithm type is best for sorted array search?', options: ['Binary search', 'Linear search', 'Insertion sort', 'Bubble sort'], correct: 'Binary search', difficulty: 2, timestamp: 0, explanation: 'Binary search works on sorted arrays.' },
    { id: 'dsa3', course: 'dsa', type: 'typing', text: 'Write the command to push a value x onto a stack named myStack in pseudocode.', expected: 'myStack.push(x)', difficulty: 3, timestamp: 0, explanation: 'Use push() to add to stack.' },
    { id: 'html1', course: 'html_css', type: 'mcq', text: 'Which tag creates a link in HTML?', options: ['<a>', '<link>', '<src>', '<href>'], correct: '<a>', difficulty: 1, timestamp: 0, explanation: '<a> creates hyperlinks.' },
    { id: 'html2', course: 'html_css', type: 'mcq', text: 'What CSS property changes text color?', options: ['color', 'font-size', 'background', 'margin'], correct: 'color', difficulty: 1, timestamp: 0, explanation: 'color sets text color.' },
    { id: 'html3', course: 'html_css', type: 'typing', text: 'Write the HTML tag for a level 2 heading.', expected: '<h2>', difficulty: 2, timestamp: 0, explanation: 'Use the h2 tag.' },
    { id: 'react1', course: 'react', type: 'mcq', text: 'Which hook is used for state in React?', options: ['useState', 'useEffect', 'useMemo', 'useContext'], correct: 'useState', difficulty: 1, timestamp: 0, explanation: 'useState manages state.' },
    { id: 'react2', course: 'react', type: 'mcq', text: 'JSX must return how many root elements?', options: ['One', 'Two', 'Zero', 'Any number'], correct: 'One', difficulty: 2, timestamp: 0, explanation: 'JSX requires one root element.' },
    { id: 'react3', course: 'react', type: 'typing', text: 'Write a React state declaration for count with initial value 0 using useState.', expected: 'const [count, setCount] = useState(0);', difficulty: 3, timestamp: 0, explanation: 'useState returns an array pair.' },
    { id: 'mongo1', course: 'mongodb', type: 'mcq', text: 'Which command inserts a document in MongoDB?', options: ['insertOne()', 'insert()', 'create()', 'save()'], correct: 'insertOne()', difficulty: 1, timestamp: 0, explanation: 'insertOne inserts one document.' },
    { id: 'mongo2', course: 'mongodb', type: 'mcq', text: 'MongoDB stores data in which format?', options: ['JSON-like', 'XML', 'CSV', 'Binary'], correct: 'JSON-like', difficulty: 1, timestamp: 0, explanation: 'MongoDB uses BSON, a JSON-like format.' },
    { id: 'mongo3', course: 'mongodb', type: 'typing', text: 'Write the command to find all documents in a collection named users.', expected: 'db.users.find()', difficulty: 3, timestamp: 0, explanation: 'Use find() on the collection.' },
    { id: 'sql1', course: 'sql', type: 'mcq', text: 'Which SQL keyword selects data?', options: ['SELECT', 'UPDATE', 'DELETE', 'INSERT'], correct: 'SELECT', difficulty: 1, timestamp: 0, explanation: 'SELECT retrieves rows from tables.' },
    { id: 'sql2', course: 'sql', type: 'mcq', text: 'Which clause filters rows in SQL?', options: ['WHERE', 'HAVING', 'GROUP BY', 'ORDER BY'], correct: 'WHERE', difficulty: 1, timestamp: 0, explanation: 'WHERE filters rows before grouping.' },
    { id: 'sql3', course: 'sql', type: 'typing', text: 'Write the SQL query to select all columns from table employees.', expected: 'SELECT * FROM employees;', difficulty: 2, timestamp: 0, explanation: 'Use SELECT * FROM table.' },
    { id: 'php1', course: 'php', type: 'mcq', text: 'What symbol begins a variable in PHP?', options: ['$', '&', '#', '%'], correct: '$', difficulty: 1, timestamp: 0, explanation: 'PHP variables start with $. ' },
    { id: 'php2', course: 'php', type: 'mcq', text: 'Which function outputs text in PHP?', options: ['echo', 'print', 'write', 'show'], correct: 'echo', difficulty: 1, timestamp: 0, explanation: 'echo outputs text in PHP.' },
    { id: 'php3', course: 'php', type: 'typing', text: 'Write a PHP statement that assigns 5 to a variable x.', expected: '$x = 5;', difficulty: 2, timestamp: 0, explanation: 'Use $ variable syntax and assignment.' }
  ],
  state: {
    enrolledCourses: ['python', 'java', 'c', 'cpp', 'dsa', 'html_css', 'react', 'mongodb', 'sql', 'php'],
    selectedCourses: [],
    watchHistory: {
      python: 700,
      java: 800,
      c: 600,
      cpp: 700,
      dsa: 1200,
      html_css: 500,
      react: 1000,
      mongodb: 900,
      sql: 1500,
      php: 800
    },
    currentQuestions: [],
    historyIds: [],
    currentIndex: 0,
    timerInterval: null
  },
  getUserData: function() {
    return JSON.parse(localStorage.getItem('quizbotUser')) || {
      hearts: 10,
      streak: 0,
      purchases: [],
      badges: [],
      totalCorrect: 0
    };
  },
  saveUserData: function(data) {
    localStorage.setItem('quizbotUser', JSON.stringify(data));
  },
  updateQuizStatus: function() {
    const user = this.getUserData();
    const hearts = document.getElementById('quiz-hearts');
    const streak = document.getElementById('quiz-streak');
    const badges = document.getElementById('quiz-badges');
    if (hearts) hearts.innerText = user.hearts;
    if (streak) streak.innerText = user.streak;
    if (badges) badges.innerText = user.badges.join(', ') || 'No badges yet';
  },
  checkBadges: function(user) {
    if (user.totalCorrect >= 1 && !user.badges.includes('Beginner')) {
      user.badges.push('Beginner');
      alert('🏆 Badge Unlocked: Beginner!');
    }
    if (user.totalCorrect >= 10 && !user.badges.includes('Learner')) {
      user.badges.push('Learner');
      alert('🏆 Badge Unlocked: Learner!');
    }
    if (user.totalCorrect >= 25 && !user.badges.includes('Pro Solver')) {
      user.badges.push('Pro Solver');
      alert('🏆 Badge Unlocked: Pro Solver!');
    }
    if (user.streak >= 5 && !user.badges.includes('Consistency King')) {
      user.badges.push('Consistency King');
      alert('🔥 Badge Unlocked: Consistency King!');
    }
  },
  applyCorrectAnswer: function() {
    const user = this.getUserData();
    user.hearts += 1;
    user.totalCorrect += 1;
    user.streak += 1;
    this.checkBadges(user);
    this.saveUserData(user);
    this.updateQuizStatus();
  },
  applyWrongAnswer: function() {
    const user = this.getUserData();
    if (user.hearts > 0) {
      user.hearts -= 1;
    }
    user.streak = 0;
    this.saveUserData(user);
    this.updateQuizStatus();
  },
  pickRandom: function(items, count) {
    return [...items].sort(() => 0.5 - Math.random()).slice(0, count);
  },
  generateBatch: function() {
    const selected = this.state.selectedCourses.length ? this.state.selectedCourses : this.state.enrolledCourses;
    const available = this.knowledgeBase.filter(q =>
      selected.includes(q.course) &&
      q.timestamp <= (this.state.watchHistory[q.course] || 0) &&
      !this.state.historyIds.includes(q.id)
    );
    const mcqPool = available.filter(q => q.type === 'mcq');
    const typingPool = available.filter(q => q.type === 'typing');
    const selectedMcq = this.pickRandom(mcqPool, 7);
    const selectedTyping = this.pickRandom(typingPool, 3);
    let batch = [...selectedMcq, ...selectedTyping];
    if (batch.length < 10) {
      const remaining = available.filter(q => !batch.includes(q));
      batch = [...batch, ...this.pickRandom(remaining, 10 - batch.length)];
    }
    if (batch.length < 10) {
      this.state.historyIds = [];
      const resetPool = this.knowledgeBase.filter(q =>
        selected.includes(q.course) &&
        q.timestamp <= (this.state.watchHistory[q.course] || 0)
      );
      const resetMcq = this.pickRandom(resetPool.filter(q => q.type === 'mcq'), 7);
      const resetTyping = this.pickRandom(resetPool.filter(q => q.type === 'typing'), 3);
      batch = [...resetMcq, ...resetTyping].slice(0, 10);
    }
    if (!batch.length) {
      this.quizArea.innerHTML = '<div class="quizbot-question"><strong>No quiz questions are available.</strong></div>';
      return;
    }
    this.state.currentQuestions = batch.map(q => ({
      ...q,
      timeLimit: q.type === 'mcq' ? 30 : 60 + q.difficulty * 20
    }));
    this.state.currentIndex = 0;
    this.renderQuestion();
  },
  renderStartScreen: function() {
    this.state.selectedCourses = [];
    this.quizArea.classList.remove('hidden');
    document.querySelector('.quizbot-more')?.classList.add('hidden');
    this.quizArea.innerHTML = `
      <div class="quizbot-start-screen">
        <div class="quizbot-description">
          <strong>Choose the courses to include in this round</strong>
          <p>Select one or more categories below, then begin.</p>
        </div>
        <div class="quizbot-course-grid">
          ${this.availableCourses.map(course => `
            <label class="quizbot-course-option">
              <input type="checkbox" value="${course}" />
              <span>${this.courseNames[course]}</span>
            </label>
          `).join('')}
        </div>
        <button class="button-primary quizbot-begin">Begin Quiz</button>
      </div>
    `;
    const checkboxes = this.quizArea.querySelectorAll('input[type="checkbox"]');
    const beginButton = this.quizArea.querySelector('.quizbot-begin');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.state.selectedCourses = Array.from(checkboxes)
          .filter(input => input.checked)
          .map(input => input.value);
      });
    });
    beginButton.addEventListener('click', () => {
      if (!this.state.selectedCourses.length) {
        alert('Please select at least one course to begin the quiz.');
        return;
      }
      this.generateBatch();
    });
  },
  renderQuestion: function() {
    if (this.state.currentIndex >= this.state.currentQuestions.length) {
      this.quizArea.innerHTML = `
        <div class="quizbot-question">
          <strong>Round complete. Use More Quiz to select new courses.</strong>
        </div>
      `;
      document.querySelector('.quizbot-more')?.classList.remove('hidden');
      return;
    }
    const q = this.state.currentQuestions[this.state.currentIndex];
    clearInterval(this.state.timerInterval);
    let html = `
      <div class="quizbot-round-header">
        <div>${this.courseNames[q.course] || q.course.toUpperCase()}</div>
        <div>Question ${this.state.currentIndex + 1}/10</div>
      </div>
      <div class="quizbot-timer-row">
        <div class="timer-label">Time</div>
        <div class="timer-value"><span id="timer">${q.timeLimit}</span>s</div>
      </div>
      <div class="timer-track"><div class="timer-fill" id="timer-fill"></div></div>
      <div class="quizbot-question"><strong>${q.text}</strong></div>
    `;
    if (q.type === 'mcq') {
      html += `
        <div class="quizbot-options quizbot-grid-2">
          ${q.options.map((opt, index) => `
            <button class="quizbot-option" data-index="${index}" type="button">
              <span class="option-label">${String.fromCharCode(65 + index)}</span>
              ${opt}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      html += `
        <textarea id="code-input" placeholder="${q.placeholder || 'Type your answer here...'}"></textarea>
        <button class="button-primary quizbot-submit">Submit Code</button>
      `;
    }
    html += `
      <div class="quizbot-feedback"></div>
      <button class="quizbot-next button-secondary hidden" type="button">Next question</button>
    `;
    this.quizArea.innerHTML = html;
    this.startTimer(q.timeLimit);
    if (q.type === 'mcq') {
      const optionButtons = this.quizArea.querySelectorAll('.quizbot-option');
      const feedback = this.quizArea.querySelector('.quizbot-feedback');
      const nextButton = this.quizArea.querySelector('.quizbot-next');
      optionButtons.forEach(button => {
        button.addEventListener('click', () => {
          const selectedIndex = Number(button.dataset.index);
          const selectedValue = q.options[selectedIndex];
          const isCorrect = selectedValue === q.correct;
          optionButtons.forEach(btn => btn.disabled = true);
          optionButtons.forEach(btn => {
            const btnIndex = Number(btn.dataset.index);
            const btnValue = q.options[btnIndex];
            btn.classList.toggle('correct', btnValue === q.correct);
            if (btnValue !== q.correct && btnIndex === selectedIndex) {
              btn.classList.add('incorrect');
            }
          });
          feedback.innerHTML = `
            <div>${isCorrect ? '✅ Correct!' : '❌ Not quite.'}</div>
            <small>${q.explanation || ''}</small>
          `;
          this.state.historyIds.push(q.id);
          if (isCorrect) {
            this.applyCorrectAnswer();
          } else {
            this.applyWrongAnswer();
          }
          nextButton.classList.remove('hidden');
        });
      });
      nextButton.addEventListener('click', () => this.nextQuestion());
    } else {
      const submit = this.quizArea.querySelector('.quizbot-submit');
      const feedback = this.quizArea.querySelector('.quizbot-feedback');
      const nextButton = this.quizArea.querySelector('.quizbot-next');
      submit.addEventListener('click', () => {
        const userInput = document.getElementById('code-input').value.trim();
        const isCorrect = userInput.toLowerCase() === (q.expected || '').toLowerCase();
        feedback.innerHTML = `
          <div>${isCorrect ? '✅ Code Correct!' : '❌ Check your code and try again.'}</div>
          <small>${q.explanation || ''}</small>
        `;
        submit.disabled = true;
        nextButton.classList.remove('hidden');
        this.state.historyIds.push(q.id);
        if (isCorrect) {
          this.applyCorrectAnswer();
        } else {
          this.applyWrongAnswer();
        }
      });
      nextButton.addEventListener('click', () => this.nextQuestion());
    }
  },
  startTimer: function(seconds) {
    let timeRemaining = seconds;
    const timerEl = document.getElementById('timer');
    const fillEl = document.getElementById('timer-fill');
    if (fillEl) fillEl.style.width = '100%';
    this.state.timerInterval = setInterval(() => {
      timeRemaining--;
      if (timerEl) timerEl.innerText = timeRemaining;
      if (fillEl) fillEl.style.width = `${(timeRemaining / seconds) * 100}%`;
      if (timeRemaining <= 0) {
        clearInterval(this.state.timerInterval);
        this.nextQuestion();
      }
    }, 1000);
  },
  nextQuestion: function() {
    this.state.currentIndex++;
    this.renderQuestion();
  },
  loadMore: function() {
    document.querySelector('.quizbot-more')?.classList.add('hidden');
    this.renderStartScreen();
  }
};

function initQuizBot() {
  const root = document.getElementById('quizbot-root');
  if (!root) return;
  root.innerHTML = `
    <div class="quizbot">
      <button class="quizbot-toggle" type="button">
        <svg class="quizbot-badge" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg"><use href="#quizbot-robot"/></svg>
        <div>
          <strong>QuizBot</strong>
          <span>Practice assistant</span>
        </div>
      </button>
      <div class="quizbot-panel hidden">
        <div class="quizbot-header">
          <div>
            <strong>QuizBot</strong>
            <span>Ready to test your skills.</span>
          </div>
          <button class="quizbot-close" type="button">✕</button>
        </div>
        <div class="quizbot-body">
          <div class="quizbot-status">
            <div class="status-pill">♥ <span id="quiz-hearts">0</span></div>
            <div class="status-pill">🔥 <span id="quiz-streak">0</span></div>
            <div class="status-pill">🏅 <span id="quiz-badges">No badges yet</span></div>
          </div>
          <div class="quizbot-message">Tap Start Quiz to choose your course set and begin.</div>
          <div class="quizbot-actions">
            <button class="quizbot-start button-primary" type="button">Start Quiz</button>
            <button class="quizbot-suggest button-secondary" type="button">Show sample</button>
            <button class="quizbot-more button-secondary hidden" type="button">More Quiz</button>
          </div>
          <div class="quizbot-quiz hidden"></div>
        </div>
      </div>
    </div>
  `;
  const toggle = root.querySelector('.quizbot-toggle');
  const panel = root.querySelector('.quizbot-panel');
  const close = root.querySelector('.quizbot-close');
  const start = root.querySelector('.quizbot-start');
  const suggest = root.querySelector('.quizbot-suggest');
  const quizArea = root.querySelector('.quizbot-quiz');
  QuibotPlatform.quizArea = quizArea;
  QuibotPlatform.updateQuizStatus();
  toggle.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    quizBotState.quizOpen = !panel.classList.contains('hidden');
  });
  close.addEventListener('click', () => {
    panel.classList.add('hidden');
    quizBotState.quizOpen = false;
    clearInterval(QuibotPlatform.state.timerInterval);
  });
  start.addEventListener('click', () => QuibotPlatform.renderStartScreen());
  suggest.addEventListener('click', () => showSuggestion());
  const more = root.querySelector('.quizbot-more');
  more.addEventListener('click', () => QuibotPlatform.loadMore());
  function showSuggestion() {
    quizArea.classList.remove('hidden');
    document.querySelector('.quizbot-more')?.classList.add('hidden');
    quizArea.innerHTML = `
      <div class="quizbot-question">
        <strong>Sample question:</strong>
        <p>Which element creates a button in HTML?</p>
      </div>
      <div class="quizbot-options quizbot-grid-2">
        <button class="quizbot-option" type="button"><span class="option-label">A</span>&lt;btn&gt;</button>
        <button class="quizbot-option correct" type="button"><span class="option-label">B</span>&lt;button&gt;</button>
        <button class="quizbot-option" type="button"><span class="option-label">C</span>&lt;input-text&gt;</button>
        <button class="quizbot-option" type="button"><span class="option-label">D</span>&lt;clickable&gt;</button>
      </div>
      <div class="quizbot-feedback">Correct answer: &lt;button&gt;.</div>
    `;
  }
}

window.addEventListener('load', initQuizBot);
