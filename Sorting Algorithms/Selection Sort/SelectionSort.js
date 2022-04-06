let arr=[5,1,6,3,7]
let N=arr.length;
console.log(selecionSort(N,arr))
function selecionSort(N,arr){
    for(let i=0;i<N;i++){
        let min=i;
        for(let j=i+1;j<N;j++){
            if(arr[min]>arr[j]){
              min=j
            }
        }
        var ans=swap(arr,min,i)
    }
    return ans
}


function swap(arr,a,b){
    var temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
    return arr
}

//Time Complexity O(N*N)
// Space Complexity O(1)