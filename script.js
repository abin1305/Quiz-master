  const quizData = {
            "General Knowledge": [
                {"question": "1. What is the capital of France?", "options": ["paris", "london", "berlin"], "answer": "paris"},
                {"question": "2. The Indian Railway Board Act was passed in the year?", "options": ["1966", "1937", "1905"], "answer": "1937"},
                {"question": "3. Which is the third civilian award in India?", "options": ["bharat ratna", "padma bhushan", "padma shri"], "answer": "padma bhushan"},
                {"question": "4. Which is the lowest house of the Parliament of India?", "options": ["lok sabha", "rajya sabha", "vidhan sabha"], "answer": "lok sabha"},
                {"question": "5. Name of the river bank on which Taj Mahal is situated?", "options": ["ganga", "yamuna", "godavari"], "answer": "yamuna"},
                {"question": "6. Who was the first Indian Governor-General of independent India?", "options": ["rajendra prasad", "c.rajagopalachari", "vallabhai patel"], "answer": "c.rajagopalachari"},
                {"question": "7. Where was Mahatma Gandhi born?", "options": ["porbandar", "allahabad", "cuttack"], "answer": "porbandar"},
                {"question": "8. How many years is the term of office for the President of India?", "options": ["1", "4", "5"], "answer": "5"},
                {"question": "9. Which one of the below state's PIN code starts with 2?", "options": ["rajesthan", "maharashtra", "utter pradesh"], "answer": "utter pradesh"},
                {"question": "10. Which is the national song of India?", "options": ["vande mataram", "jana gana mana", "sare jaham se accha"], "answer": "vande mataram"}
            ],
            "Modern Experiments": [
                {"question": "1. What is the name of the experiment that successfully detected gravitational waves in 2015?", "options": ["LIGO", "CERN", "NASA"], "answer": "LIGO"},
                {"question": "2. Which experiment discovered the Higgs boson particle in 2012?", "options": ["ATLAS", "LHC", "NASA"], "answer": "ATLAS"},
                {"question": "3. What is the name of the experiment that aims to create a sustainable fusion reaction?", "options": ["ITER", "NASA", "CERN"], "answer": "ITER"},
                {"question": "4. Which experiment uses a large underground tank to detect neutrino oscillations?", "options": ["Super-Kamiokande", "Sudbury Neutrino Observatory", "IceCube"], "answer": "Super-Kamiokande"},
                {"question": "5. What is the name of the experiment that aims to directly detect dark matter particles?", "options": ["XENON1T", "CERN", "LUX-ZEPLIN"], "answer": "LUX-ZEPLIN"}
            ],
            "Space": [
                {"question": "1. What is the closest planet to the Sun?", "options": ["Venus", "Mercury", "Earth"], "answer": "Mercury"},
                {"question": "2. Which planet is known as the Red Planet?", "options": ["Mars", "Jupiter", "Saturn"], "answer": "Mars"},
                {"question": "3. What is the largest planet in our solar system?", "options": ["Saturn", "Jupiter", "Neptune"], "answer": "Jupiter"},
                {"question": "4. Which moon is the largest in our solar system?", "options": ["Titan", "Ganymede", "Europa"], "answer": "Ganymede"},
                {"question": "5. What is the name of the first artificial satellite?", "options": ["Sputnik 1", "Explorer 1", "Vostok 1"], "answer": "Sputnik 1"}
            ],
            "Climate": [
                {"question": "1. What is the primary greenhouse gas?", "options": ["Carbon Dioxide", "Oxygen", "Nitrogen"], "answer": "Carbon Dioxide"},
                {"question": "2. Which layer of the atmosphere contains the ozone layer?", "options": ["Troposphere", "Stratosphere", "Mesosphere"], "answer": "Stratosphere"},
                {"question": "3. What is the average global temperature increase since pre-industrial times?", "options": ["0.5°C", "1°C", "1.5°C"], "answer": "1°C"},
                {"question": "4. Which ocean current affects the climate of Western Europe?", "options": ["Gulf Stream", "California Current", "Kuroshio Current"], "answer": "Gulf Stream"},
                {"question": "5. What is the main cause of sea level rise?", "options": ["Thermal expansion", "Ice melting", "Both"], "answer": "Both"}
            ],
            "Geography": [
                {"question": "1. What is the longest river in the world?", "options": ["Amazon", "Nile", "Yangtze"], "answer": "Nile"},
                {"question": "2. Which is the highest mountain in the world?", "options": ["K2", "Kangchenjunga", "Everest"], "answer": "Everest"},
                {"question": "3. What is the largest desert in the world?", "options": ["Sahara", "Arabian", "Gobi"], "answer": "Sahara"},
                {"question": "4. Which country has the most natural lakes?", "options": ["Canada", "Russia", "Finland"], "answer": "Canada"},
                {"question": "5. What is the smallest continent?", "options": ["Australia", "Europe", "Antarctica"], "answer": "Australia"}
            ],
            "Health": [
                {"question": "1. What is the normal body temperature in Celsius?", "options": ["35°C", "37°C", "39°C"], "answer": "37°C"},
                {"question": "2. Which vitamin is produced when skin is exposed to sunlight?", "options": ["Vitamin A", "Vitamin D", "Vitamin K"], "answer": "Vitamin D"},
                {"question": "3. What is the largest organ in the human body?", "options": ["Heart", "Liver", "Skin"], "answer": "Skin"},
                {"question": "4. How many chambers does the human heart have?", "options": ["2", "3", "4"], "answer": "4"},
                {"question": "5. What is the main function of red blood cells?", "options": ["Fight infection", "Carry oxygen", "Clot blood"], "answer": "Carry oxygen"}
            ],
            "Vehicles": [
                {"question": "1. What does SUV stand for?", "options": ["Super Utility Vehicle", "Sport Utility Vehicle", "Small Utility Vehicle"], "answer": "Sport Utility Vehicle"},
                {"question": "2. Which company produces the Mustang?", "options": ["Chevrolet", "Ford", "Dodge"], "answer": "Ford"},
                {"question": "3. What is the top speed of a Bugatti Chiron?", "options": ["300 km/h", "400 km/h", "500 km/h"], "answer": "500 km/h"},
                {"question": "4. Which fuel type is used in electric vehicles?", "options": ["Petrol", "Diesel", "Electricity"], "answer": "Electricity"},
                {"question": "5. What does ABS stand for in vehicles?", "options": ["Anti-lock Braking System", "Automatic Brake System", "Advanced Brake System"], "answer": "Anti-lock Braking System"}
            ],
            "New Technology": [
                {"question": "1. What does AI stand for?", "options": ["Artificial Intelligence", "Advanced Interface", "Automated Integration"], "answer": "Artificial Intelligence"},
                {"question": "2. Which company developed the iPhone?", "options": ["Samsung", "Apple", "Google"], "answer": "Apple"},
                {"question": "3. What is blockchain primarily used for?", "options": ["Cryptocurrency", "Social media", "Video games"], "answer": "Cryptocurrency"},
                {"question": "4. What does 5G refer to?", "options": ["Fifth generation wireless", "Fast gaming network", "Five gigabit internet"], "answer": "Fifth generation wireless"},
                {"question": "5. Which programming language is known for machine learning?", "options": ["Java", "Python", "C++"], "answer": "Python"}
            ],
            "Artificial Intelligence": [
                {"question": "1. What is machine learning?", "options": ["Teaching machines", "Learning from data", "Both"], "answer": "Both"},
                {"question": "2. Which AI technique mimics human brain?", "options": ["Neural Networks", "Decision Trees", "Genetic Algorithms"], "answer": "Neural Networks"},
                {"question": "3. What is natural language processing?", "options": ["Processing languages", "Understanding human language", "Translating languages"], "answer": "Understanding human language"},
                {"question": "4. Which company created ChatGPT?", "options": ["Google", "OpenAI", "Microsoft"], "answer": "OpenAI"},
                {"question": "5. What is computer vision?", "options": ["Seeing with computers", "Computer graphics", "Video editing"], "answer": "Seeing with computers"}
            ],
            "Medicinal Plants": [
                {"question": "1. Which plant is used to make aspirin?", "options": ["Willow", "Aloe Vera", "Ginger"], "answer": "Willow"},
                {"question": "2. What is the active ingredient in turmeric?", "options": ["Curcumin", "Capsaicin", "Quercetin"], "answer": "Curcumin"},
                {"question": "3. Which plant is known for its anti-inflammatory properties?", "options": ["Ginger", "Mint", "Basil"], "answer": "Ginger"},
                {"question": "4. What is aloe vera primarily used for?", "options": ["Skin care", "Digestive health", "Pain relief"], "answer": "Skin care"},
                {"question": "5. Which plant contains caffeine?", "options": ["Tea", "Coffee", "Both"], "answer": "Both"}
            ]
        };

        let currentCategory = '';
        let currentQuestionIndex = 0;
        let score = 0;
        let timer = 30;
        let timerInterval;
        let selectedAnswer = '';
        let answeredQuestions = {}; // Track which questions have been answered correctly

        const categorySelection = document.getElementById('category-selection');
        const quizSection = document.getElementById('quiz-section');
        const finalResults = document.getElementById('final-results');
        const questionEl = document.getElementById('question');
        const optionsEl = document.getElementById('options');
        const resultEl = document.getElementById('result');
        const scoreEl = document.getElementById('score');
        const timerEl = document.getElementById('timer');
        const progressFill = document.getElementById('progress-fill');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const practiceSection = document.getElementById('practice-section');

        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentCategory = btn.dataset.category;
                startQuiz();
            });
        });

        document.getElementById('back-to-categories').addEventListener('click', backToCategories);
        document.getElementById('restart-quiz').addEventListener('click', backToCategories);
        document.getElementById('load-question').addEventListener('click', loadApiQuestion);

        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (selectedAnswer) {
                checkAnswer();
                if (currentQuestionIndex < quizData[currentCategory].length - 1) {
                    currentQuestionIndex++;
                    displayQuestion();
                } else {
                    showResults();
                }
            }
        });

        function startQuiz() {
            categorySelection.style.display = 'none';
            practiceSection.style.display = 'none';
            quizSection.style.display = 'block';
            currentQuestionIndex = 0;
            score = 0;
            answeredQuestions = {}; // Reset answered questions tracking
            displayQuestion();
        }

        function displayQuestion() {
            const question = quizData[currentCategory][currentQuestionIndex];
            // Update question number in the question text
            const questionNumber = currentQuestionIndex + 1;
            const updatedQuestion = question.question.replace(/^\d+\./, questionNumber + '.');
            questionEl.textContent = updatedQuestion;
            optionsEl.innerHTML = '';
            selectedAnswer = '';

            question.options.forEach((option, index) => {
                const optionEl = document.createElement('div');
                optionEl.className = 'option';
                optionEl.textContent = option;
                optionEl.addEventListener('click', () => selectOption(optionEl, option));
                optionsEl.appendChild(optionEl);
            });

            // Restore previous selection if question was already answered
            if (answeredQuestions[currentQuestionIndex] !== undefined) {
                const previousAnswer = answeredQuestions[currentQuestionIndex].answer;
                document.querySelectorAll('.option').forEach(opt => {
                    if (opt.textContent.toLowerCase() === previousAnswer.toLowerCase()) {
                        opt.classList.add('selected');
                        selectedAnswer = previousAnswer;
                    }
                });
            }

            updateUI();
            startTimer();
        }

        function selectOption(optionEl, answer) {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionEl.classList.add('selected');
            selectedAnswer = answer;
            nextBtn.disabled = false;
        }

        function checkAnswer() {
            const correctAnswer = quizData[currentCategory][currentQuestionIndex].answer.toLowerCase();
            const isCorrect = selectedAnswer.toLowerCase() === correctAnswer;

            // Only update score if this question hasn't been answered correctly before
            if (answeredQuestions[currentQuestionIndex] === undefined) {
                if (isCorrect) {
                    score++;
                }
                answeredQuestions[currentQuestionIndex] = {
                    answer: selectedAnswer,
                    correct: isCorrect
                };
            } else {
                // Update the answer if user changed their mind
                answeredQuestions[currentQuestionIndex].answer = selectedAnswer;
                answeredQuestions[currentQuestionIndex].correct = isCorrect;

                // Adjust score if correctness changed
                if (isCorrect && !answeredQuestions[currentQuestionIndex].wasCorrect) {
                    score++;
                } else if (!isCorrect && answeredQuestions[currentQuestionIndex].wasCorrect) {
                    score--;
                }
            }

            answeredQuestions[currentQuestionIndex].wasCorrect = isCorrect;

            if (isCorrect) {
                resultEl.textContent = 'Correct!';
                resultEl.className = 'result correct';
            } else {
                resultEl.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
                resultEl.className = 'result incorrect';
            }
            resultEl.style.display = 'block';
            scoreEl.textContent = `Score: ${score}`;
        }

        function updateUI() {
            const progress = ((currentQuestionIndex + 1) / quizData[currentCategory].length) * 100;
            progressFill.style.width = `${progress}%`;
            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.disabled = !selectedAnswer;

            // Only hide result if this question hasn't been answered yet
            if (answeredQuestions[currentQuestionIndex] === undefined) {
                resultEl.style.display = 'none';
            } else {
                // Show the result for previously answered questions
                const wasCorrect = answeredQuestions[currentQuestionIndex].correct;
                const correctAnswer = quizData[currentCategory][currentQuestionIndex].answer.toLowerCase();
                if (wasCorrect) {
                    resultEl.textContent = 'Correct!';
                    resultEl.className = 'result correct';
                } else {
                    resultEl.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
                    resultEl.className = 'result incorrect';
                }
                resultEl.style.display = 'block';
            }
        }

        function startTimer() {
            clearInterval(timerInterval);
            timer = 30;
            timerEl.textContent = `Time: ${timer}`;
            timerInterval = setInterval(() => {
                timer--;
                timerEl.textContent = `Time: ${timer}`;
                if (timer <= 0) {
                    clearInterval(timerInterval);
                    nextBtn.click();
                }
            }, 1000);
        }

        function showResults() {
            clearInterval(timerInterval);
            quizSection.style.display = 'none';
            finalResults.style.display = 'block';
            const percentage = Math.round((score / quizData[currentCategory].length) * 100);
            document.getElementById('final-score').textContent = `${score}/${quizData[currentCategory].length} (${percentage}%)`;
            let message = '';
            if (percentage >= 80) message = 'Excellent! You have great knowledge!';
            else if (percentage >= 60) message = 'Good job! Keep learning!';
            else message = 'Keep practicing to improve your score!';
            document.getElementById('final-message').textContent = message;
            document.getElementById('final-message').className = 'final-message';
        }

        function backToCategories() {
            clearInterval(timerInterval);
            categorySelection.style.display = 'block';
            practiceSection.style.display = 'block';
            quizSection.style.display = 'none';
            finalResults.style.display = 'none';
            currentCategory = '';
            currentQuestionIndex = 0;
            score = 0;
            answeredQuestions = {}; // Reset answered questions tracking
            selectedAnswer = '';
        }

        // Fetch one live trivia question from the Open Trivia Database API.
        async function loadApiQuestion() {
            const apiQuestion = document.getElementById('api-question');
            const apiOptions = document.getElementById('api-options');
            const apiResult = document.getElementById('api-result');
            apiQuestion.textContent = 'Loading a question...';
            apiOptions.innerHTML = '';
            apiResult.textContent = '';

            try {
                const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986');
                if (!response.ok) throw new Error('Request failed');

                const data = await response.json();
                const practiceQuestion = data.results[0];
                const correctAnswer = decodeURIComponent(practiceQuestion.correct_answer);
                const options = [...practiceQuestion.incorrect_answers, practiceQuestion.correct_answer]
                    .map(option => decodeURIComponent(option))
                    .sort(() => Math.random() - 0.5);

                apiQuestion.textContent = decodeURIComponent(practiceQuestion.question);

                options.forEach(option => {
                    const optionButton = document.createElement('button');
                    optionButton.className = 'api-option';
                    optionButton.type = 'button';
                    optionButton.textContent = option;
                    optionButton.addEventListener('click', function() {
                        const isCorrect = option === correctAnswer;
                        document.querySelectorAll('.api-option').forEach(button => {
                            button.disabled = true;
                            if (button.textContent === correctAnswer) button.classList.add('correct');
                        });

                        if (isCorrect) {
                            apiResult.textContent = 'Correct! Great work.';
                        } else {
                            optionButton.classList.add('incorrect');
                            apiResult.textContent = `Not quite. The correct answer is ${correctAnswer}.`;
                        }
                    });
                    apiOptions.appendChild(optionButton);
                });
            } catch (error) {
                apiQuestion.textContent = 'Unable to load a question. Please try again.';
            }
        }
