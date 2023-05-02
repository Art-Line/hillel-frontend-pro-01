//  TASK 1
// Ask the user for their year of birth.
// Ask him what city he lives in.
// Ask his favorite sport.
// We invite you to OK on the presentation to the window, where the following information should be presented:
// His age.
// If the user enters Kyiv, Washington or London, it will show him a message - "You live in the possession of ..." 
// and the name of the country, which is a city, which is a city, is substituted in place of the dots in the user. 
// Refusal to address him "you live in the city ..." and to the places of points - the entered city.
// We choose three sports and three champions in these sports. 
// Accordingly, if this user enters one of the sports, then upon presentation to him the message 
// “Cool! Would you like an article...? and substitute the name and surname of the champion in place of the dot.


const birthYear = +prompt('In what year were you born?');
let yourCity = prompt('What city do you live in?');
let yourSport = prompt('What is your favorite sport?');

if (birthYear) {
    let age = new Date().getFullYear() - birthYear;
    console.log(age)
} else {
    console.log("I'm really sorry");
}

if(yourCity) yourCity = yourCity.toLowerCase();
if(yourSport) yourSport = yourSport.toLowerCase();

switch (yourCity) {
    case null:
        console.log("I'm really sorry");
        break;
    case 'kiev':
        console.log('You live in the capital of Ukraine');
        break;
    case 'london':
        console.log('You live in the capital of Great Britain');
        break;
    case 'washington':
        console.log('You live in the capital of USA');
        break;
    default:
        console.log('You live in the city of ' + yourCity);
}

switch (yourSport) {
    case null:
        console.log("I'm really sorry");
        break;
    case 'football':
        console.log('Oh cool, do you want to be Lionel Andrés Messi Cuccittini');
        break;
    case 'tennis':
        console.log('Oh cool, do you want to be Stefanos Tsitsipas');
        break;
    case 'checkers':
        console.log('Oh cool, do you want to be Matteo Bernini');
        break;
    default:
        console.log('Oh ' + yourSport + ' is cool!');
}