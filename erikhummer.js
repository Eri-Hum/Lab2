
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sum-quiz').addEventListener('click', function(){
        validateVisitor();
    })
})

function validateVisitor(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    const emailStructure = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameStructure = /^[a-zA-ZåäöÅÄÖ-]+$/;

    var validation_block = document.getElementById("validation");
    var fname_error = document.getElementById("fname-error");
    var lname_error = document.getElementById("lname-error");
    var email_error = document.getElementById("email-error");

    if (nameStructure.test(fname)) {
        validation_block.style.display = 'none';
        fname_error.style.display = 'none';
    } else {
        validation_block.style.display = 'block';
        fname_error.style.display = 'block';
        return;
    }

    if (nameStructure.test(lname)){
        validation_block.style.display = 'none';
        lname_error.style.display = 'none';
    } else {
        validation_block.style.display = 'block';
        lname_error.style.display = 'block';
        return;
    }

    if (emailStructure.test(email)) {
        validation_block.style.display = 'none';
        email_error.style.display = 'none';
    } else {
        validation_block.style.display = 'block';
        email_error.style.display = 'block';
        return;
    }

    validateQuestions();
}

function validateQuestions (){
    const reqQuestions = ['q1', 'q4', 'q8', 'q9'];
    
    let answered = true;
    var errorMsgs = [];

    reqQuestions.forEach((id) => {
        const reqQuestion = document.getElementById(id);

        const input = reqQuestion.querySelectorAll("input");
        const selected = reqQuestion.querySelectorAll("select");
        let answer = false;

        input.forEach((input) => {
            if (input.type === 'radio' || input.type === 'checkbox') {
                if (input.checked) {
                    answer = true;
                }
            }
                else if (input.type === 'text') {
                    if(input.value.trim() !== '') {
                        answer = true;
                    }
                }
        });

        selected.forEach((select) => {
            if (select.value !== "") {
                answer = true;
            }
        });

        if (!answer){
            answered = false;
            var idNmr = parseInt(id.split("q")[1], 10);
            errorMsgs.push(`You have not answered question ${idNmr}`);
        }
    });

    if (answered) {
        document.getElementById("validation").style.display = 'none';
        document.getElementById("success-container").style.display = 'block';

        setTimeout(function(){
            document.getElementById("success-container").style.display = 'none';
        }, 5000);

    } else {
        document.getElementById("validation").style.display = 'block';
        document.getElementById("question-errors").style.display = 'block';
        let allErrors = "The following questions are required and not answered:<br><br>" + errorMsgs.join("<br>");

        document.getElementById('question-errors').innerHTML = allErrors;
        return;
    }

    calculateScore();

};

function calculateScore() {
    var correctAnswers = ['Canada', ['Sweden','Norway','Finland'], 'Brasilia', 'Arctic', ['Nile','Congo'], 'Himalayas', 'Rome', ['Switzerland', 'Hungary'], 'Brazil'];

    var allAnswers = fetchAnswers();

    let totalScore = 0;

    const resQuestion = document.getElementById("result-question");
    resQuestion.innerHTML = '';

    correctAnswers.forEach((correctAns, index) => {
        let userAns = allAnswers[index];

        var newP = document.createElement("p");

        if (Array.isArray(correctAns)){
            if(Array.isArray(userAns) && correctAns.length === userAns.length && correctAns.every(ans => userAns.map(u => u.toLowerCase()).includes(ans.toLowerCase()))) {
                totalScore += 1;
                newP.textContent = `Question ${index + 1}: Correct! Your answer: ${userAns} / Correct answer: ${correctAns}`;
                newP.style.color = "Green";
                resQuestion.appendChild(newP);
            } else {
                newP.textContent = `Question ${index + 1}: Wrong! Your answer: ${userAns} / Correct answer: ${correctAns}`;
                newP.style.color = "Red";
                resQuestion.appendChild(newP);
            }
        } else {
            if(userAns.length > 0 && correctAns.toLowerCase() === userAns[0].toLowerCase()){
                totalScore += 1;
                newP.textContent = `Question ${index + 1}: Correct! Your answer: ${userAns} / Correct answer: ${correctAns}`;
                newP.style.color = "Green";
                resQuestion.appendChild(newP);
            } else {
                newP.textContent = `Question ${index + 1}: Wrong! Your answer: ${userAns} / Correct answer: ${correctAns}`;
                newP.style.color = "Red";
                resQuestion.appendChild(newP);
            }
        }
    });

    document.getElementById("total-score").textContent = 'You scored ' + totalScore + ' out of 9!';
}

function fetchAnswers (){
    let allAnswers = [];

    const qq = document.querySelectorAll('.qq');

    qq.forEach((question) => {
        const input = question.querySelectorAll("input");
        const selected = question.querySelectorAll("select");

        let ans = [];

        input.forEach((input) => {
        if (input.type === 'text' || input.checked) {
            ans.push(input.value);
        }
        });

        selected.forEach((select) => {
            ans.push(select.value);
        });

        allAnswers.push(ans);
    });

    return allAnswers;
}
