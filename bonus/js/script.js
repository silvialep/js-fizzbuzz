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

/* assegnazione dell'id container dall'html */
let containerEl = document.getElementById('container');


/* programma che stampa in console i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {

    /* creazione di nuovo elemento in html */
    let newDiv = document.createElement('div');
    containerEl.append(newDiv);

    /* per i multipli sia di 3 che di 5 stampa "FizzBuzz" al posto del numero */
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz);
        containerEl.append(newDiv);
        newDiv.innerHTML= fizzBuzz;
    } else

    /* per i multipli solo di 3 stampa "Fizz" al posto del numero */
    if (i % 3 == 0) {
        console.log(fizz);
        containerEl.append(newDiv);
        newDiv.innerHTML = fizz;
    } else

    /* per i multipli solo di 5 stampa "Buzz" al posto del numero */
    if (i % 5 == 0) {
        console.log(buzz);
        containerEl.append(newDiv);
        newDiv.innerHTML = buzz;
    }
    
    /* per tutti gli altri numeri stampa solo il numero */
    else {
        console.log(i);
        containerEl.append(newDiv);
        newDiv.innerHTML = i;
    }

    newDiv.style.border = '1px solid black';
    newDiv.style.width = 'calc(100% / 7 - (20px / 6))';
}

