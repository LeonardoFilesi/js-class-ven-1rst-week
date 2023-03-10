// PROVE APPUNTI
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// for (let i = 1; i <= 100; i++) {
//        console.log(i);
// }

//    for (let i = 10; i >=0; i--) {
//        console.log(i);
//    }
//    console.log("fuori dal ciclo"); 

//    for (let i = 0; i <= 10; i = i + 2) {
//        console.log(i);
//    }

// ESERCIZIO:
// Milestone 1 - scrivere nella console tutti i numeri da 0 a 1000 specificando
// se sono pari o dispari

// Milestone 2 - scrivere tutti i numeri nella pagina

// MIlestone 3 - coloriamo diversamente pari e dispari

//1
/* const gridElem = document.querySelector(".grid");
for (let i = 0; i <= 1000; i++) {
    
    let oddEven;
    if (i % 2 === 0) {
        oddEven = "pari";
    } else {
        oddEven = "dispari";
    }
    console.log(i, oddEven);
} */

//2
/* const gridElem = document.querySelector(".grid");
for (let i = 0; i <= 100; i++) {
    
    let oddEven;
    if (i % 2 === 0) {
        oddEven = "pari";
    } else {
        oddEven = "dispari";
    }
    console.log(i, oddEven);
    gridElem.innerHTML += `<div class="box">${i}</div>`;
}
 */

//3
const gridElem = document.querySelector(".grid");
for (let i = 0; i <= 100; i++) {
    
    let oddEven;
    let classColor;
    if (i % 2 === 0) {
        oddEven = "pari";
        classColor = "even";
    } else {
        oddEven = "dispari";
        classColor = "odd";
    }
    console.log(i, oddEven);
    gridElem.innerHTML += `<div class="box ${classColor}">${i}</div>`;
}
