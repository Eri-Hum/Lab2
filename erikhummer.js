
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('start-btn').addEventListener('click', function(event){
        event.preventDefault();
        validateInput();
    })
    
    document.getElementById('sum-quiz').addEventListener('click', function(){
        summarizeQuiz();
    })
})

function validateInput(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    console.log("First name: " + fname + "  Last name: " + lname + "  Email: " + email);

    const emailStructure = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameStructure = /^[a-zA-ZåäöÅÄÖ-]+$/;


    if (nameStructure.test(fname)) {
        console.log("First name looks good!");
    } else {
        alert("First name is in the wrong format");
        return;
    }


    if (nameStructure.test(lname)){
        console.log("First name looks good!");
    } else {
        alert("Last name is in the wrong format");
        return;
    }


    if (emailStructure.test(email)) {
        console.log("Email is goood!");
    } else {
        alert("Email in wrong format. ");
        return;
    }

    startQuiz();
}


function startQuiz () {
    document.getElementById('quiz-start').style.display = 'none';
    var elements = document.getElementsByClassName('qq');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'block';
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
    var answerQ4 = document.querySelector('input[name="q4"]:checked').value;

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

    /*console.log("A1: " + answerQ1+"\n" + "A2: " + answerQ2+"\n" + "A3: " + answerQ3+"\n" + "A4: " + answerQ4+"\n" + "A5: " + answerQ5+"\n" + "A6: " + answerQ6+"\n" + "A7: " + answerQ7+"\n" + "A8: " + answerQ8+"\n" + "A9: " + answerQ9);*/

    var allAnswers = [answerQ1, answerQ2, answerQ3, answerQ4, answerQ5, answerQ6, answerQ7, answerQ8, answerQ9];

    var correctAnswers = ['b', ['a','b','d'], 'Brasilia', 'b', ['a','c'], 'Himalayas', 'b', ['a', 'c'], 'Brazil'];

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