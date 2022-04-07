// Approach Brute-Force
// In this TC is O(N)
// In this SC is O(1)
var N=7
function checkPrime(N){
  let c=0;
  for(var i=1;i<=N;i++){
    if(N%i==0){
      c++
    }
  }
  if(c==2){
    console.log("Yes")
  }
  else{
    console.log("No")
  }
}
checkPrime(N)

//Time complexity O(N)
//space complexity O(1)


//Optimized Approach  in (sqrt(N))

console.log(PrimeCheck(N))


function PrimeCheck(N){
if(N<=1){
  return "No"
}
  for(i=2;i*i<=N;i++){ // TC O(sqrt(N))
    if(N%i==0){
      return "No"
    }
  }
  return "Yes"
}

//Time complexity O(sqrt(N))
// Space complexity O(1)