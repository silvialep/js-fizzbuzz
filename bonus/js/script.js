// Scrivi un programma che stampi in console i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


/* assegnazione delle variabili da usare all'interno del programma */
let contatore;
let fizz = 'fizz';
let buzz = 'buzz';
let fizzBuzz = 'fizzbuzz';

/* assegnazione dell'id container dall'html */
let containerEl = document.getElementById('container');


/* programma che stampa in console i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {

    /* creazione di nuovo elemento in html */
    let newDiv = document.createElement('div');
    containerEl.append(newDiv);
    newDiv.classList.add('card-deco');

    /* per i multipli sia di 3 che di 5 stampa "FizzBuzz" al posto del numero */
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz);
        containerEl.append(newDiv);
        newDiv.innerHTML = fizzBuzz;
        newDiv.style.backgroundColor = 'rgb(240, 70, 111)';
    } else

    /* per i multipli solo di 3 stampa "Fizz" al posto del numero */
    if (i % 3 == 0) {
        console.log(fizz);
        containerEl.append(newDiv);
        newDiv.innerHTML = fizz;
        newDiv.style.backgroundColor = 'rgb(12, 214, 161)';
    } else

    /* per i multipli solo di 5 stampa "Buzz" al posto del numero */
    if (i % 5 == 0) {
        console.log(buzz);
        containerEl.append(newDiv);
        newDiv.innerHTML = buzz;
        newDiv.style.backgroundColor = 'rgb(255, 209, 102)';
    }
    
    /* per tutti gli altri numeri stampa solo il numero */
    else {
        console.log(i);
        containerEl.append(newDiv);
        newDiv.innerHTML = i;
        newDiv.style.backgroundColor = 'rgb(19, 137, 178)';
    }

    /* stilizzazione comune dei nuovi elementi ______aggiunta in css con la creazione di una classe apposita*/
    // newDiv.style.minWidth = '140px';
    // newDiv.style.height = '140px';
    // newDiv.style.textAlign = 'center';
}

