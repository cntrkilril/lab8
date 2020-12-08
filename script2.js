console.log("Задача 2");
let chislo=0;
let ost=0;
while (chislo<=15) {
    ost=chislo%2;
    switch (ost) {
        case 0:
            console.log(chislo+" четное");
            break;
        case 1:
            console.log(chislo+" нечетное");
            break;
    }
    chislo++
}