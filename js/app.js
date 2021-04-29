
'ues stract';

let name;
let scoor = 0;


name = prompt('My name is Ahmed, and I am happy that you visited my page. Can I know your name? ?');
alert('welcome ' + " " + name + '  in my page');
alert('I will ask you some questions about me, please answer yes or no');



// first 4 Question :-

function yesNO() {


  let name1 = prompt("am i student?");

  if (name1.toLowerCase() == "yes" || name1.toLowerCase() == "y") {
    alert('yes i am student')
    scoor++;
  }
  else if (name1.toLowerCase() == "no" || name1.toLowerCase() == "n") {
    alert(" no i am  student")
  } else {
    alert('please enter yes or no');

  }
  let age = prompt("Is my age 28 ?")
  if (age.toLowerCase() == "yes" || age.toLowerCase() == "y") {
    alert(" yes i am 28 years old ")
    scoor++;
  } else if (age.toLowerCase() == "no" || age.toLowerCase() == "n") {
    alert('no it is false answer')
  } else {
    alert('please enter yes or no')
  }
  let live = prompt("Do I live in Zarqa? ")

  if (live.toLowerCase() == "yes" || live.toLowerCase() == "y") {
    alert(" NO i live in amman ")

  } else if (live.toLowerCase() == "no" || live.toLowerCase() == "n") {
    alert('exactly  your answer')
    scoor++;
  } else {
    alert('please enter yes or no')
  }
  let num = prompt("Am I a doctor?")

  if (num.toLowerCase() == "yes" || num.toLowerCase() == "y") {
    alert(" NO i am not a doctor ")

  } else if (num.toLowerCase() == "no" || num.toLowerCase() == "n") {
    alert('your answer is corect')
    scoor++;
  } else {
    alert('please enter yes or no')
  }
  let app = prompt("Am I currently learning programming? ")

  if (app.toLowerCase() == "yes" || app.toLowerCase() == "y") {
    alert(" exactly  ")
    scoor++;
  } else if (app.toLowerCase() == "no" || app.toLowerCase() == "n") {
    alert('no i learning this ')
  } else {
    alert('please enter yes or no')

  }
}



// sixth Question :-

function prophet() {

  alert('I will ask you a question and I want you to guess the correct answer,OK');
  alert('You only have 4 attempts to answer')
  let questions;
  for (i = 1; i <= 4; i++) {

    questions = Number(prompt('How old was the Prophet Muhammad when he died..? '))

    if (questions == 63) {

      alert('yes this is corect answer ')
      scoor++;
      break;

    } else if (questions <= 62) {
      alert(' your answer it\'s too low')

    } else if (questions >= 64) {
      alert(' your answer it\'s too high')

    } while (i == 4) {
      alert(' the corect asnwer is 63 yaers')
      break;
    }



  }
}

//7th Question:- 

function contrys() {
  alert('Hi , i will to ask you anther question,And you have 6 attempts, if you know one of the correct answers, you will be the winner....OK ');
  alert(' i will to show you your gride in this Question , just you have 6 Guesses ')


  let multi = ["Norway", "Denmark", "Iceland", "Sweden", "Finland", "Faroe Islands"]

  for (let j = 0; j < 7; j++) {

    for (let i = 0; i < multi.length; i++) {

      let answer = prompt('Mention a country from Scandinavia...?')

      if (answer == multi[i]) {
        alert(' yes this is corect answer');
        console.log(multi[i]);
        scoor++;
        j = 7;
        break;
      } else {
        alert('no it is wrong answer, Try agin')
        j++;
      }

    }
  }
}


// calls the function:-
yesNO();
prophet();
contrys();


alert(' your grade is ' + scoor + " / 7")
alert("nice to meet you  " + name);





// // YES
// // yes
// //          yes
// // if (x.toLowerCase()=="yes" || x.toLowerCase()=='y')