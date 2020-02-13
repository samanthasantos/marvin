function fizzbuzz(num1, num2){
    
    while (num1 <= num2){
        
        if (num1 % 3 === 0 && num1 % 5 === 0){
            console.log(num1 + " fizzbuzz");
            
        }
        else if (num1 % 3 === 0){
            console.log(num1 + "fizz");
            
        }
        else if (num1 % 5 === 0){
            console.log(num1 + "buzz");
            num1++
        } else
        console.log(num1)
        num1++
    }
}

