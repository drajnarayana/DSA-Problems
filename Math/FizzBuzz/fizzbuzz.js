//Given input integer N=10

//step1 Print the numbers from 1 to N
function fizzBuzz(N){
    for(var i=1;i<=N;i++){  //1 to N numbers => T.C =O(N)
        if(i%3==0 && i%5==0){   //condition for multiple of both 3 and 5
            console.log("FizzBuzz") 
        }
        else if(i%3==0){         //condition for multiple of 3
            console.log("Fizz")
        }
        else if(i%5==0){        //condition for multiple of 5
            console.log("Buzz")
        }
        else{
            console.log(i)     //printing number 
        }
    }
}
let N=10;

fizzBuzz(N)

//Time complexity O(N) for every integer 
//space complexity O(1) not using any space here