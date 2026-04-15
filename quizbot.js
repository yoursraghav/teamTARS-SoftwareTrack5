const quizBotData = {
  questions: [
    {
      prompt: 'Which of the following is a JavaScript framework?',
      options: ['Django', 'React', 'Laravel', 'Flask'],
      answer: 1,
      explanation: 'React is a popular JavaScript library/framework for building user interfaces.'
    },
    {
      prompt: 'What does CSS stand for?',
      options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Central Style Syntax'],
      answer: 1,
      explanation: 'CSS stands for Cascading Style Sheets.'
    },
    {
      prompt: 'Which HTML tag is used for the largest heading?',
      options: ['<h1>', '<head>', '<header>', '<h6>'],
      answer: 0,
      explanation: 'The <h1> tag is used for the highest-level heading in HTML.'
    }
  ]
};

const quizBotState = {
  activeQuestion: 0,
  quizOpen: false
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
          <div class="quizbot-message">Hi! Tap "Start mini quiz" for a quick practice question or get a sample challenge.</div>
          <div class="quizbot-actions">
            <button class="quizbot-start button-primary" type="button">Start mini quiz</button>
            <button class="quizbot-suggest button-secondary" type="button">Show sample</button>
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

  toggle.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    quizBotState.quizOpen = !panel.classList.contains('hidden');
  });

  close.addEventListener('click', () => {
    panel.classList.add('hidden');
    quizBotState.quizOpen = false;
  });

  start.addEventListener('click', () => startQuiz(0));
  suggest.addEventListener('click', () => showSuggestion());

  function renderQuestion(index) {
    const question = quizBotData.questions[index];
    quizArea.classList.remove('hidden');
    quizArea.innerHTML = `
      <div class="quizbot-question">
        <strong>${question.prompt}</strong>
      </div>
      <div class="quizbot-options">
        ${question.options
          .map(
            (option, optionIndex) => `
            <button class="quizbot-option" data-index="${optionIndex}" type="button">${option}</button>
          `
          )
          .join('')}
      </div>
      <div class="quizbot-feedback"></div>
      <button class="quizbot-next button-secondary hidden" type="button">Next question</button>
    `;

    const optionButtons = quizArea.querySelectorAll('.quizbot-option');
    const feedback = quizArea.querySelector('.quizbot-feedback');
    const nextButton = quizArea.querySelector('.quizbot-next');

    optionButtons.forEach((optionButton) => {
      optionButton.addEventListener('click', () => {
        const selectedIndex = Number(optionButton.dataset.index);
        const isCorrect = selectedIndex === question.answer;
        optionButtons.forEach((btn) => btn.disabled = true);
        optionButtons.forEach((btn) => {
          const btnIndex = Number(btn.dataset.index);
          btn.classList.toggle('correct', btnIndex === question.answer);
          if (btnIndex !== question.answer && btnIndex === selectedIndex) {
            btn.classList.add('incorrect');
          }
        });
        feedback.innerHTML = `
          <div>${isCorrect ? '✅ Correct!' : '❌ Not quite.'}</div>
          <small>${question.explanation}</small>
        `;
        nextButton.classList.remove('hidden');
      });
    });

    nextButton.addEventListener('click', () => {
      if (index + 1 < quizBotData.questions.length) {
        renderQuestion(index + 1);
      } else {
        quizArea.innerHTML = `
          <div class="quizbot-question">
            <strong>Nice work! You finished the mini quiz.</strong>
            <p>Try another round anytime.</p>
          </div>
        `;
      }
    });
  }

  function startQuiz(index) {
    renderQuestion(index);
  }

  function showSuggestion() {
    quizArea.classList.remove('hidden');
    quizArea.innerHTML = `
      <div class="quizbot-question">
        <strong>Sample question:</strong>
        <p>Which of these is a valid HTML element for creating a button?</p>
      </div>
      <div class="quizbot-options">
        <button class="quizbot-option" type="button">&lt;btn&gt;</button>
        <button class="quizbot-option correct" type="button">&lt;button&gt;</button>
        <button class="quizbot-option" type="button">&lt;input-text&gt;</button>
        <button class="quizbot-option" type="button">&lt;clickable&gt;</button>
      </div>
      <div class="quizbot-feedback">Correct answer: &lt;button&gt;.</div>
    `;
  }
}

window.addEventListener('load', initQuizBot);
