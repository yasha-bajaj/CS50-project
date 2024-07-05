// script.js

document.addEventListener('DOMContentLoaded', function() {
    const questions = [
      { q: "How do you feel today?", options: ["Happy", "Sad", "Excited", "Calm"], scores: [3, 1, 3, 2] },
      { q: "What is your favorite music genre?", options: ["Pop", "Rock", "Electronic", "Jazz"], scores: [2, 2, 2, 1] },
      { q: "Choose an ideal vacation destination:", options: ["Beach", "Mountains", "City", "Countryside"], scores: [3, 2, 2, 1] },
      { q: "Which activity would you enjoy most right now?", options: ["Reading", "Listening to music", "Exercising", "Watching movies"], scores: [2, 3, 3, 2] },
      { q: "Pick a color that reflects your mood:", options: ["Blue", "Yellow", "Green", "Pink"], scores: [1, 3, 2, 3] },
      { q: "What type of movies do you prefer?", options: ["Comedy", "Drama", "Action", "Romance"], scores: [3, 1, 3, 2] },
      { q: "Select a season you love the most:", options: ["Spring", "Summer", "Autumn", "Winter"], scores: [2, 3, 2, 1] },
      { q: "Which animal describes your current mood?", options: ["Lion", "Dolphin", "Butterfly", "Panda"], scores: [3, 2, 3, 1] },
      { q: "What is your favorite way to relax?", options: ["Meditation", "Going for a walk", "Listening to music", "Taking a bath"], scores: [2, 3, 3, 2] },
      { q: "Pick a word that describes your mood right now:", options: ["Happy", "Sad", "Relaxed", "Excited"], scores: [3, 1, 2, 3] }
    ];
  
    let currentQuestionIndex = 0;
    let totalScore = 0;
  
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');
  
    function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.q;
      optionsElement.innerHTML = '';
      currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-btn');
        optionButton.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionButton);
      });
    }
  
    function selectOption(index) {
      totalScore += questions[currentQuestionIndex].scores[index];
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        localStorage.setItem('totalScore', totalScore);
        window.location.href = 'page3.html';
      }
    }
  
    loadQuestion();
  });
  