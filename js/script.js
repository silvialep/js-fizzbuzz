// Scrivi un programma che stampi in console i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

/* assegnazione delle variabili da usare all'interno del programma */
let contatore;
let fizz = 'Fizz';
let buzz = 'Buzz';
let fizzBuzz = 'FizzBuzz';

/* programma che stampa in console i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {
    
    /* per i multipli sia di 3 che di 5 stampa "FizzBuzz" al posto del numero */
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz);
    } else
    /* per i multipli solo di 3 stampa "Fizz" al posto del numero */
    if (i % 3 == 0) {
        console.log(fizz);
    } else
    /* per i multipli solo di 5 stampa "Buzz" al posto del numero */
    if (i % 5 == 0) {
        console.log(buzz);
    }

    /* per tutti gli altri numeri stampa solo il numero */
    else {
        console.log(contatore = i);
    }
}