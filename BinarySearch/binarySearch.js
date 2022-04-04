//Approach 1  -> Brute Force
//Linear Search
let arr=[1,3,4,7]
let N=arr.length;let K=9

function brute(N,K,arr){
  
    for(var i=0;i<N;i++){   //traversing the whole array
                            //it takes O(N)
        if(arr[i]==K){
            return true
        }
    }
    return false
}
console.log(brute(N,K,arr))
// Time complexity is O(N)
//Space complexity is O(1)



console.log(binarySearch(N,K,arr))

function binarySearch(N,K,arr){
   let low=0;let high=N-1;
   let mid;
   while(low<=high){
       mid=Math.floor(low+(high-low)/2)
       if(arr[mid]==K){
          return true
       }
       else if(arr[mid]<K){
           low=mid+1
       }
       else{
         high=mid-1
       }
   }
   return false
}

// Time complexity is O(logN)
//Space complexity is O(1)

