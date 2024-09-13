
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

    console.log("A1: " + answerQ1+"\n" + "A2: " + answerQ2+"\n" + "A3: " + answerQ3+"\n" + "A4: " + answerQ4+"\n" + "A5: " + answerQ5+"\n" + "A6: " + answerQ6+"\n" + "A7: " + answerQ7+"\n" + "A8: " + answerQ8+"\n" + "A9: " + answerQ9);

}