let user;
let score = 0;
let current_q_set;
let qCount = 0;
let questions = [
    'The language spoken by the people of Pakistan is ?',
    'The world\'s largest desert is?',
    'Country that has the highest in Barley Production ?',
    'The metal whose salts are sensitive to light is ?',
    'The Central Rice Research Station is situated in ?',
    'Mount Everest is located in ?',
    'Which soil is suitable for agriculture ?',
    'Black soils are best suited for the cultivation of ?',
    'The device used for measuring altitudes is ?',
    'The Gate way of India is in ?',
];

// More questions can be added...

let answers = [
    'Sindhi',
    'Sahara',
    'Russia',
    'Silver',
    'Cuttack',
    'Nepal',
    'Peaty soil',
    'Cotton',
    'altimeter',
    'Mumbai',
];
let options = [
    ['Hindi', 'Palauan', 'Nauruan'],
    ['Thar', 'Kalahari', 'Sonoran'],
    ['China', 'India', 'France'],
    ['Zinc', 'Copper', 'Aluminium'],
    ['Chennai', ' Quilon', 'Bangalore'],
    ['India', 'Tibet', 'China'],
    [' Red soil', 'Sand', ' Black soil'],
    ['Rice', 'Sugarcane', 'Cereals'],
    ['ammeter', 'audiometer', 'galvanometer'],
    ['Chennai', 'New Delhi', 'Kolkata'],
];

let startSession = document.getElementById('start-section');
let userName = document.getElementById('username');
let loginButton = document.getElementById('login-button');
let quizSession = document.getElementById('quiz-section');
let uname = document.getElementById('uname');
let viewScore = document.getElementById('score');
let exitButton = document.getElementById('exit');
let endSession = document.getElementById('end-section');
let endMsg = document.getElementById('end');
let ques = document.getElementById('question');
let optionButtons = document.querySelectorAll('.opt');



for (let a = 0; a < optionButtons.length; ++a) {
    optionButtons[a].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgb(127, 255, 212)';
    });
    optionButtons[a].addEventListener('mouseout', function() {
        this.style.backgroundColor = 'rgba(127, 255, 212, 0.5)';
    });
}


let exit = function() {
    quizSession.style.display = 'none';
    endSession.style.display = 'block';
    endMsg.innerHTML = user + ', your score is ' + score;
};

let generateQuestion = function() {
    if(qCount == questions.length) {
        exit();
    } else {
        ques.textContent = questions[current_q_set[qCount]];
        let ans = Math.floor(Math.random() * 4);
        let opts = generateRandom(3);
        for(let y = 0; y < optionButtons.length; ++y) {
            if (y == ans) {
               optionButtons[y].textContent = answers[current_q_set[qCount]];
           } else {
                optionButtons[y].textContent = options[current_q_set[qCount]][opts.pop()];
            }
        }
    }
}


loginButton.onclick = function() {
    if (userName.value === '') {
        alert('Enter a valid username');
    } else {
        user = userName.value;
        startSession.style.display = 'none';
        quizSession.style.display = 'block';
        uname.innerHTML = user;
        viewScore.innerHTML = 'Score: ' + score;
        current_q_set = generateRandom(questions.length);
        generateQuestion();
        buttonClick();
    }
}

exitButton.onclick = exit;



function buttonClick() {
    let t;
    for(let a = 0; a < optionButtons.length; ++a) {
        optionButtons[a].addEventListener('click', function() {
            t = this;
            if (this.textContent == answers[current_q_set[qCount]]) {
                ++qCount;
                viewScore.innerHTML = 'Score: ' + (++score);
                this.style.background = 'rgba(0,255,0,0.3)';
                window.setTimeout(function() {t.style.background = 'rgba(127, 255, 212, 0.5)';}, 1000);
                window.setTimeout(generateQuestion, 2000);
            } else {
                ++qCount;
                this.style.background = 'rgba(255,0,0,0.3)';
                window.setTimeout(function() {t.style.background = 'rgba(127, 255, 212, 0.5)';}, 1000);
                window.setTimeout(generateQuestion, 2000);
            }
        });
    }
}


function generateRandom(n) {
    let arr = [];
    while(arr.length != n) {
        let x = Math.floor(Math.random() * n);
        if(!(arr.includes(x))) {
            arr.push(x);
        }
    }
    return arr;
}
