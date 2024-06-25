let num1=2
let num2=5

function calcularMMC(num1, num2){
    var resto, x, y;
    x = num1;
    y = num2;

    while(resto!=0){
        resto = x % y;
        x = y;
        y = resto;
    }

return (num1*num2)/x;
}
var resultado =  calcularMMC(5, 10);
console.log(resultado)
