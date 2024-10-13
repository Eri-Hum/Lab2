
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sum-quiz').addEventListener('click', function(){
        validateVisitor();
        /*summarizeQuiz();*/
    })
})

function validateVisitor(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    const emailStructure = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameStructure = /^[a-zA-ZåäöÅÄÖ-]+$/;

    var validation_block = document.getElementById("validation");
    var bottom = document.getElementById("bottom");
    var fname_error = document.getElementById("fname-error");
    var lname_error = document.getElementById("lname-error");
    var email_error = document.getElementById("email-error");

    if (nameStructure.test(fname)) {
        validation_block.style.display = 'none';
        fname_error.style.display = 'none';
        console.log("First name looks good!");

    } else {
        validation_block.style.display = 'block';
        fname_error.style.display = 'block';
        return;
    }


    if (nameStructure.test(lname)){
        validation_block.style.display = 'none';
        lname_error.style.display = 'none';
        console.log("Last name looks good!");
    } else {
        validation_block.style.display = 'block';
        lname_error.style.display = 'block';
        return;
    }


    if (emailStructure.test(email)) {
        validation_block.style.display = 'none';
        email_error.style.display = 'none';
        console.log("Email is goood!");
    } else {
        validation_block.style.display = 'block';
        email_error.style.display = 'block';
        return;
    }

    validateQuestions();
}

function validateQuestions (){
    const questions = document.querySelectorAll('.qq');

    let allAnswer = true;

    var errorMsgs = [];

    questions.forEach((question, index) => {
        const input = question.querySelectorAll("input");
        const selected = question.querySelectorAll("select");
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
            allAnswer = false;
            errorMsgs.push(`You have not answered question ${index + 1}`);
        }
    });

    if (allAnswer) {
        startQuiz();
        console.log('All questions are answered.')
        document.getElementById("validation").style.display = 'none';
    } else {
        console.log(errorMsgs);

        document.getElementById("validation").style.display = 'block';
        document.getElementById("question-errors").style.display = 'block';
        let allErrors = "The following questions are not answered:<br>" + errorMsgs.join("<br>");

        document.getElementById('question-errors').innerHTML = allErrors;
    
    }
};

function startQuiz () {
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-information').style.display = 'none';
    var elements = document.getElementsByClassName('qq');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'block';
    }

}

function fetchRadioAnswers(){
    for (let i = 0; i < id.length; i++){

        if (Array.isArray)
        var ans = document.querySelectorAll('');

        //Om det redan är en array så...
        allAns.push(ans);
    }
}


function summarizeQuiz(){
    //ANSWER #1
    var answerQ1 = document.querySelector('input[name="q1"]:checked').value;

    //ANSWER #2
    var answerQ2 = [];
    var checkQ2 = document.querySelectorAll('input[name="q2"]:checked');
    for (var i = 0; i < checkQ2.length; i++){
        var single_q2a = checkQ2[i].value;
        answerQ2.push(single_q2a);
    }

    //ANSWER #3
    var answerQ3 = document.getElementById('qq3').value;

    //ANSWER #4
    var answerQ4 = document.getElementById('q4').value;
    console.log(answerQ4);

    //ANSWER #5
    var answerQ5 = [];
    var checkQ5 = document.querySelectorAll('input[name="q5"]:checked');
    for (var i = 0; i < checkQ5.length; i++){
        var single_q5a = checkQ5[i].value;
        answerQ5.push(single_q5a);
    }

    //ANSWER #6
    var answerQ6 = document.getElementById('qq6').value;

    //ANSWER #7
    var answerQ7 = document.querySelector('input[name="q7"]:checked').value;

    //ANSWER #8
    var answerQ8 = [];
    var checkQ8 = document.querySelectorAll('input[name="q8"]:checked');
    for (var i = 0; i < checkQ8.length; i++){
        var single_q8a = checkQ8[i].value;
        answerQ8.push(single_q8a);
    }

    //ANSWER #9
    var answerQ9 = document.getElementById('qq9').value;

    var allAnswers = [answerQ1, answerQ2, answerQ3, answerQ4, answerQ5, answerQ6, answerQ7, answerQ8, answerQ9];

    var correctAnswers = ['Canada', ['Sweden','Norway','Finland'], 'Brasilia', 'Artic', ['Nile','Congo'], 'Himalayas', 'Rome', ['Switzerland', 'Hungary'], 'Brazil'];

    let score = 0;

    for (let i = 0; i < allAnswers.length; i++){

        if (allAnswers[i] == correctAnswers[i]){
            console.log("MyAns: " + allAnswers[i] + " : " + "CorrAns: " + correctAnswers[i]);
            console.log(i + ": Correct!")
            score += 1;
        } else if (Array.isArray(allAnswers[i])){
            let answer = allAnswers[i];
            let correct = correctAnswers[i];

            if (answer.length !== correct.length){
                console.log('Incorrect!');
            } else {
                for (let a = 0; a < answer.length; a++){
                    if(answer[a] === correct[a]){
                        console.log("Correct!");
                        score += 1;
                    } else {
                        console.log("Inccorect!");
                    }
                }
            }

        } else {
            console.log("MyAns: " + allAnswers[i] + " : " + "CorrAns: " + correctAnswers[i]);
            console.log(i + ": Wrong!")
            continue;
        }
    } 

    console.log(score);
    document.getElementById('summary').style.display = 'block';

    var elements = document.getElementsByClassName('qq');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }


    if (score < 3){
        document.getElementById('word').textContent = "That wasn't good!";
        document.getElementById('word').style.color = "red";
    } else if(score > 3 && score < 9) {
        document.getElementById('word').textContent = "Pretty average!";
        document.getElementById('word').style.color = "yellow";
    } else if(score > 9 && score <12){
        document.getElementById('word').textContent = "Good job!";
        document.getElementById('word').style.color = "green";
    } else {
        document.getElementById('word').textContent = "Excellent!";
        document.getElementById('word').style.color = "green";
    }

    document.getElementById('your-score').textContent ="Your score: " + score + " / 13";

    document.getElementById('ans1').textContent = "Your answer: " + answerQ1;
    document.getElementById('ans2').textContent = "Your answer: " + answerQ2;
    document.getElementById('ans3').textContent = "Your answer: " + answerQ3;
    document.getElementById('ans4').textContent = "Your answer: " + answerQ4;
    document.getElementById('ans5').textContent = "Your answer: " + answerQ5;
    document.getElementById('ans6').textContent = "Your answer: " + answerQ6;
    document.getElementById('ans7').textContent = "Your answer: " + answerQ7;
    document.getElementById('ans8').textContent = "Your answer: " + answerQ8;
    document.getElementById('ans9').textContent = "Your answer: " + answerQ9;


    

}