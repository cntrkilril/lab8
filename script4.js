let chislo1=prompt("Введите 1 число");
let chislo2=prompt("Введите 2 число");
let chislo3=prompt("Введите 3 число");
let t=0;
let n1=chislo1;
let n2=chislo2;
let n3=chislo3;
if (chislo1<=chislo3 && chislo3<=chislo2) {
    n1=chislo1;
    n2=chislo3;
    n3=chislo2;
} 
if (chislo2<=chislo1 && chislo1<=chislo3) {
    n1=chislo2;
    n2=chislo1;
    n3=chislo3;
} 
if (chislo2<=chislo3 && chislo3<=chislo1) {
    n1=chislo2;
    n2=chislo3;
    n3=chislo1;
} 
if (chislo3<=chislo1 && chislo1<=chislo2) {
    n1=chislo3;
    n2=chislo1;
    n3=chislo2;
} 
if (chislo3<=chislo2 && chislo2<=chislo1) {
    n1=chislo3;
    n2=chislo2;
    n3=chislo1;
} 
console.log(n1+" "+n2+" "+n3)
