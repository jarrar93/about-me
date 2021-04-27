
let name;
name = prompt('My name is Ahmed, and I am happy that you visited my page. Can I know your name? ?');
alert('welcome ' + " " + name + '  in my page');
alert('I will ask you some questions about me, please answer yes or no');


let name1 = prompt("am i student?");

if (name1.toLowerCase() == "yes" || name1.toLowerCase() == "y") {
  alert('yes i am student')
}
else if (name1.toLowerCase() == "no" || name1.toLowerCase() == "n") {
  alert(" no i am  student")
} else {
  alert('please enter yes or no');

}
let age = prompt("Is my age 28 ?")
if (age.toLowerCase() == "yes" || age.toLowerCase() == "y") {
  alert(" yes i am 28 years old ")
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
} else {
  alert('please enter yes or no')
}
let num = prompt("Am I a doctor?")

if (num.toLowerCase() == "yes" || num.toLowerCase() == "y") {
  alert(" NO i am not a doctor ")
} else if (num.toLowerCase() == "no" || num.toLowerCase() == "n") {
  alert('your answer is corect')
} else {
  alert('please enter yes or no')
}
let app = prompt("Am I currently learning programming? ")

if (app.toLowerCase() == "yes" || app.toLowerCase() == "y") {
  alert(" exactly  ")
} else if (app.toLowerCase() == "no" || app.toLowerCase() == "n") {
  alert('no i learning this ')
} else {
  alert('please enter yes or no')

}

alert('I will ask you a question and I want you to guess the correct answer,OK');
alert('You only have 4 attempts to answer')
let questions;

for (i = 1; i <= 4; i++) {

  questions = Number(prompt('How old was the Prophet Muhammad when he died..? '))

  if (questions == 63) {

    alert('yes this is corect answer ')
    break;
  } else if (questions <= 62) {
    alert(' your answer it\'s too low')

  } else if (questions >= 64) {
    alert(' your answer it\'s too high')
  } while (i >= 4) {
    alert(' the corect asnwer is 63 yaers')
    break;
  }



}

alert('Hi , i will to ask you anther question,And you have 6 attempts, if you know one of the correct answers, you will be the winner....OK ');
let multi = ['Norway', 'Denmark', 'Iceland', 'Sweden', 'Finland', 'Faroe Islands']

let answer = prompt('Mention a country from Scandinavia...?')
let x;

for (i = 1; i <= 5; i++) {

  if (answer.toLowerCase() == "norway" || answer.toUpperCase() == "Norway") {
    alert(' exactly this contry form Scandinavia')

    break;


  } else if (answer.toLowerCase() == "denmark" || answer.toUpperCase() == "Denmark") {
    alert('exactly this contry form Scandinavia')

    break;

  } else if (answer.toLowerCase() == "iceland" || answer.toUpperCase() == "Iceland") {
    alert('exactly this contry form Scandinavia')
    break;

  } else if (answer.toLowerCase() == "sweden" || answer.toUpperCase() == "Sweden") {
    alert('exactly this contry form Scandinavia')

    break;
  } else if (answer.toLowerCase() == "finland" || answer.toUpperCase() == "Finland") {
    alert('exactly this contry form Scandinavia')

    break;
  } else if (answer.toLowerCase() == "faroe islands" || answer.toUpperCase() == "Faroe Islands") {
    alert('exactly this contry form Scandinavia')
    break;

  } else if (answer != 1) {

    alert(' no answer')
    answer = prompt('Mention a country from Scandinavia...?')

  }
}










































alert("nice to meet you  " + name);





// // YES
// // yes
// //          yes
// // if (x.toLowerCase()=="yes" || x.toLowerCase()=='y')