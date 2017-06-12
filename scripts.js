//scripts.js

var buttonClass = document.getElementsByClassName('button');
console.log(buttonClass);
console.log(buttonClass.length);


for ( var k = 0 ; k < 4 ; k++) {
   var butttonClass = document.createElement('button');
   butttonClass.innerHTML = 'Hello!';

   console.log(butttonClass);
   alert("Hello!")
}



/* - !WSZYTKO PONIŻEJ TO SĄ TYLKO NOTATKI, NIE PYTANIA
for ( var k = 0 ; k < 10 ; k++) {
  console.log('The value of k is now: ' + k);
}
console.log(window);

function raiseAlarm() {
    alert('I show it once after 2 seconds.');
}

var delayedAlert = setTimeout(raiseAlarm, 2000); // funcja "opóżnienie" po 2 s. (jednostka w milisekundach)

clearTimeout(delayedAlert); // anulowanie opóźnienia



function raiseAlarm() {
    alert('I show myself every two seconds.')
}

var interval = setInterval(raiseAlarm, 2000); //setInterval - pokazuje się w 2s interawałam w tym wypadku

function stop() {
    alert('It took 10 seconds. The following statement interrupts the interval.'); //pokazuje alert
    clearInterval(interval); //anuluje interwał
}

setTimeout(stop, 10000); //wywołuje funkcje stop, po 10 sek - czyli komunikat i anulowanie interawłu



window.location = 'http://www.kodilla.pl'; // przekierowanie / przeładowanie strony 
console.log(location)



var navigation = document.getElementById('h1'); // szuka po ID (musi być przypisany w HTML-u)
console.log(navigation);



var withMenuItemsClass = document.getElementsByClassName('klasa'); // szuka po klasie (musi być przypisany w HTML-u)
console.log(withMenuItemsClass);

var menu = document.getElementById('Menu');

menu.className += 'navbar-right'; // to się nam pojawia w konsoli, modyfikujemy klasę z HTMLa

console.log(menu.className);

*/
