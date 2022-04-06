let arr=[5,1,6,3,7]
let N=arr.length;
console.log(bubbleSort(N,arr))
function bubbleSort(N,arr){
    for(let i=0;i<N-1;i++){
        for(let j=0;j<N-i-1;j++){
           if(arr[j]>arr[j+1]){
               var ans=swap(arr,j,j+1)
           }
        }
        
    }
    return ans.join(" ")
}

function swap(arr,a,b){
    var temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp;
    return arr
}

//Time Complexity O(N*N)
//Space Complexity O(1)