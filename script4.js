console.log("Задача 4")
let chis1=Number(prompt("Введите 1 число"));
let chis2=Number(prompt("Введите 2 число"));
let chis3=Number(prompt("Введите 3 число"));
let n1=chis1;
let n2=chis2;
let n3=chis3;
if (chis1<=chis3 && chis3<=chis2) {
    n1=chis1;
    n2=chis3;
    n3=chis2;
} 
if (chis2<=chis1 && chis1<=chis3) {
    n1=chis2;
    n2=chis1;
    n3=chis3;
} 
if (chis2<=chis3 && chis3<=chis1) {
    n1=chis2;
    n2=chis3;
    n3=chis1;
} 
if (chis3<=chis1 && chis1<=chis2) {
    n1=chis3;
    n2=chis1;
    n3=chis2;
} 
if (chis3<=chis2 && chis2<=chis1) {
    n1=chis3;
    n2=chis2;
    n3=chis1;
} 
console.log(n1+" "+n2+" "+n3)
