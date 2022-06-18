function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
        for (var i = 2; i < number + 10; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }

        fibonacci.shift()

    return fibonacci
} 
    var f = GenerateFibonacci(3);
    console.log(f);


function verificarFibonacci(number){

        var fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        if(number == 0){
            return "Não Pertence"
        } else if(number == 1){
            return "Pertence"
        } else {
            for (var i = 2; i <= number + 10; i++) {

                fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];

                if(fibonacci[i] == number){
                     return"Pertence"
            }  
            }
            return "Não pertence"
        }
             
    
    }
       
   console.log(verificarFibonacci(35))
           