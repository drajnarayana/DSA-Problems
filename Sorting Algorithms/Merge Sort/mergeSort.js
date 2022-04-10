let arr=[5,1,6,3,7];
let N=arr.length
let low=0;let high=N-1;
console.log(mergeSort(arr,low,high))
function mergeSort(arr,low,high){
  if(low>=high){
    return arr
  }
  let mid=Math.floor(low+(high-low)/2)
  mergeSort(arr,low,mid)
  mergeSort(arr,mid+1,high)
  merge(arr,low,high,mid)
  return arr
}
function merge(arr,low,high,mid){
  let left=[];let right=[]
  for(i=low;i<=mid;i++){
    left.push(arr[i])
  }
  for(let j=mid+1;j<=high;j++){
    right.push(arr[j])
  }
  var i=0;
  var j=0;
  var k=low;
  while(i<left.length && j<right.length){
    if(left[i]<=right[j]){
      arr[k]=left[i];
      i++
    }
    else{
      arr[k]=right[j]
      j++
    }
    k++
  }

  while(i<left.length){
    arr[k]=left[i]
    i++
    k++
  }
  while(j<right.length){
    arr[k]=right[j]
    j++;
    k++
  }
  
}