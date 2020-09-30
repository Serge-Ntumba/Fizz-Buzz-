//Traditional Solve Fizz Buzz with a for loop
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let i = 1;i <=100;i++){
        if (i%value1 == 0 && i%value2 == 0){
            returnValue += 'FizzBuzz ';      
        } 
        else if (i%value1 == 0) {
            returnValue +='Fizz ';
        }
        else if (i%value2 == 0) {
            returnValue +='Buzz ';
        }
        else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
}
//Another way to follow DRY (don't repeat yourself)
function FizzBuzzB(value1, value2){
    let returnValue = "";
    let Fizz = false;
    let Buzz = false;
    for (let i =1;i<=100;i++){
        Fizz = i%value1 == 0;        
        Buzz = i%value2 == 0;        
        switch(true){
            case Fizz && Buzz : {
                returnValue += 'FizzBuzz '; 
                break;
            }
            case Fizz: {
                returnValue += 'Fizz '; 
                break;
            }
            case Buzz: {
                returnValue += 'Buzz '; 
                break;
            }
            default : {
                returnValue += i + ' '; 
                break;
            }
        }
        return returnValue;
        }
    
    }
 //Not traditonal approach
function FizzBuzzC(val1,val2){
        let returnValue = "";
        for(let i=1;i<=100;i++){
            returnValue += ((i%val1==0 ? 'Fizz' : '') + (i%val2==0 ? 'Buzz' : '') || i) + ' ';
        }
        return returnValue;
}


//Call and use it
function buzzIt(){
    let output = "";
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzC(val1,val2);
    document.getElementById('results').innerHTML = output;
}
