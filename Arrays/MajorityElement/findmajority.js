

 let arr=[1,1,1,1,2,3]; //-> Input
 // -> Output = 4 
 // Element 1 occurs five times
 //if no such element exists  print -1

 //Approach 1 Brute Force  
 let max=0;let N=arr.length;
 let index=-1;let count;
 for(let i=0;i<N;i++){    // ---> Time O(N)
     count=0;
  for(var j=0;j<N;j++){     // ----> Time O(N)
      if(arr[i]==arr[j]){
          count++
      }
   
  }

  if (count>max){
    max=count;
    index=i
   } 
}

if(max>N/2){
    console.log(max)
}
else{
    console.log(-1)       // Time ---> O(N^2)
}                        //space ---> O(1)


//Approach 2   By sorting an array  
// in Time Complexity O(nlogn) 
// in space complexity O(1)

function major(N,arr){
    var arr=arr.sort((a,b)=>{
        return a-b
    })
    if(N==1){
        return arr[N-1]
    }

        for(var i=0;i<=Math.floor(N/2);i++){
        if(arr[i]==arr[i+Math.floor(N/2)]){
            return arr[i]
        }
    }
    return -1
    }
    console.log(major(3,[2,8,8]))

//Approach 3  using Key value Pair

// in Time Complexity O(n) 
// in space complexity O(n)
function major(N,arr){
    let map={}
    for(var i=0;i<N;i++){
        if(map[arr[i]]==undefined){
            map[arr[i]]=1
        }
        else{
            map[arr[i]]++
        }
    }
    let max=0;
    for(let key in map){
        if(map[key]>max){
            max=map[key]
           var ans=key
        }
        
    }
    let m=Math.floor(N/2)
    
    if(map[ans]>m){
        console.log(ans)
    }
    else{
        console.log(-1)
    }
}


//Approach 4  Moore-vooting algorithm

// in Time Complexity O(n) 
// in space complexity O(1)

//1 condition gives majority element
function major(N,arr){
    let index=0;let c=1;
    for(var i=1;i<N;i++){
        if(arr[index]==arr[i]){
            c++
        }
        else{
            c--
        }
        if(c==0){
            index=i;
            c=1
        }
    }
    return arr[index]
}

//2 condition gives the majority element which occurs more than N/2

let el=major(N,arr)
        let co=0;
        for(var j=0;j<N;j++){
            if(el==arr[j]){
                co++
            }
        }
        if(co>Math.floor(N/2)){
            console.log(el)
        }
        else{
            console.log("-1")
        }


