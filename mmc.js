let num1
let num2
    
console.log("Digite o primeiro número para saber o mmmc");
    process.stdin.on('data', function(data){
        num1=Number(data)

        console.log("Digite o segundo número:")
        process.stdin.once('data', function(data){
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
            var resultado =  calcularMMC(5, 10);
            console.log(resultado);
            process.exit();



        })
    })
