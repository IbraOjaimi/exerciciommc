let num1
let num2
    
console.log("Digite o primeiro número para saber o mmmc");
    process.stdin.on('data', function(data){
        num1=Number(data)

        console.log("Digite o segundo número:")
        process.stdin.once('data', function(data){
            num2=Number(data)
            function calcularMMC(num1, num2){
                num2=Number(data)
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
            var resultado =  calcularMMC(num1, num2);
            console.log(resultado);

            function calcularMDC(num1, num2){
               var resto1;
               do {
                resto1 = num1 % num2;
                num1 = num2;
                num2 = resto1;
            
               } while (resto1 != 0);
               return num1;
            }
            var resultado1 = calcularMDC(num1, num2);
            console.log(resultado1);

    



        })
    })
