console.log("Задача 3");
let str=0;
let stl=0;
let simvol="";
let stroka="";
do {
    while (stl<8) {
        if (str%2==0) {
            if (stl%2==0) {
                stroka=stroka+"#";
            }
            else {
                stroka=stroka+" ";
            }
        }
        else {
            if (stl%2!=0) {
                stroka=stroka+"#";
            }
            else {
                stroka=stroka+" ";
            }
        }
        stl++
    }
    if (stl==8) {
        stl=0;
        stroka=stroka+"\n"
    }
    str++
} while (str<8)
console.log(stroka)