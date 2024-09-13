
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
    console.log("Summarize quiz");
}