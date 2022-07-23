const startBtn = document.getElementById('startBtn');
const hiscoreBtn = document.getElementById('hiscoreBtn');
const hiscoreScreen = document.getElementById('hiscoreScreen');
const question1 = document.getElementById('question-1');
const htmlBody = document.getElementById('body-container');
const nextBtnContainer = document.getElementById('nextBtnContainer');
const titleCard = document.getElementById('title-card');
const nextBtn = document.getElementById('nextBtn');
var qCnt = 0;
var ansA;
var ansB;
var ansC;
var ansD;

startBtn.addEventListener('click', startGame);
hiscoreBtn.addEventListener('click', goToHiscore);
nextBtn.addEventListener('click', nextQuestion);

function startGame() {
    console.log('Started!');
    startQuestions();
}

function startQuestions() {
    hiscoreScreen.classList.add('hidden');
    hiscoreScreen.classList.remove('hiscoreScreen');
    question1.classList.remove('hidden');
    htmlBody.classList.remove('bodyCorrect');
    htmlBody.classList.remove('bodyIncorrect');
    ansA = document.getElementById('q1a');
    ansB = document.getElementById('q1b');
    ansC = document.getElementById('q1c');
    ansD = document.getElementById('q1d');
    correctAnsA();
    titleCard.classList.add('hidden');
    qCnt++;
    console.log(qCnt);
}

function nextQuestion() {
    if(qCnt >= 5)
    {
        lastQuestion();
    } else {
        //use qCnt to know what question you're on
        //load qCnt question, answers, Corrects/Incorrect
        qCnt++;
        console.log("onto question "+qCnt);
    }
}

function lastQuestion() {

}

function correctAnsA() {
    ansA.addEventListener('click', isCorrect);
    ansB.addEventListener('click', isIncorrect);
    ansC.addEventListener('click', isIncorrect);
    ansD.addEventListener('click', isIncorrect);
}

function correctAnsB() {
    ansA.addEventListener('click', isIncorrect);
    ansB.addEventListener('click', isCorrect);
    ansC.addEventListener('click', isIncorrect);
    ansD.addEventListener('click', isIncorrect);
}

function correctAnsC() {
    ansA.addEventListener('click', isIncorrect);
    ansB.addEventListener('click', isIncorrect);
    ansC.addEventListener('click', isCorrect);
    ansD.addEventListener('click', isIncorrect);
}

function correctAnsD() {
    ansA.addEventListener('click', isIncorrect);
    ansB.addEventListener('click', isIncorrect);
    ansC.addEventListener('click', isIncorrect);
    ansD.addEventListener('click', isCorrect);
}

function goToHiscore() {
    console.log('Change classes to make hiscore page showing');
}

function isCorrect(event) {
    htmlBody.classList.add('bodyCorrect');
    event.target.classList.add('correct');
    nextBtnContainer.classList.remove('hidden');
    ansA.removeEventListener('click', isCorrect);
    ansB.removeEventListener('click', isIncorrect);
    ansC.removeEventListener('click', isIncorrect);
    ansD.removeEventListener('click', isIncorrect);
}

function isIncorrect(event) {
    htmlBody.classList.add('bodyIncorrect');
    event.target.classList.add('incorrect');
    nextBtnContainer.classList.remove('hidden');
    ansA.removeEventListener('click', isCorrect);
    ansB.removeEventListener('click', isIncorrect);
    ansC.removeEventListener('click', isIncorrect);
    ansD.removeEventListener('click', isIncorrect);
}