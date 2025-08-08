document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const allQuestionSectionEl = document.querySelectorAll('.question');
  const allAnswerLiEls = document.querySelectorAll('.quiz-answer');
  const resultsDivEl = document.querySelector('#results');

  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let currentQuestionIndex = 0;
  let rightAnswersCount = 0;

  allAnswerLiEls.forEach(liEl => liEl.addEventListener('click', handleAnswerSubmit));

  function handleAnswerSubmit(e) {
    const chosenAnswer = e.target.textContent;

    if (chosenAnswer === rightAnswers[currentQuestionIndex]) {
      rightAnswersCount++;
    }

    const sectionEl = allQuestionSectionEl[currentQuestionIndex];
    sectionEl.classList.add('hidden');

    currentQuestionIndex++;

    if (currentQuestionIndex === rightAnswers.length) {
      const h1El=document.createElement('h1');
      if (rightAnswersCount===3) {
        h1El.textContent='You are recognized as top JavaScript fan!';
      } else {
        h1El.textContent=`You have ${rightAnswersCount} right answer${rightAnswersCount===1?'':'s'}`;
      }

      resultsDivEl.appendChild(h1El);
    } else {
      const newSectionEl = allQuestionSectionEl[currentQuestionIndex];
      newSectionEl.classList.remove('hidden');
    }
  }
}