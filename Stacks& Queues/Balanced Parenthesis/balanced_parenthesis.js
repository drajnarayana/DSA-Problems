let S="[()]{}";
// let S="[(])"
let N=S.length;
balanced(S,N)
function balanced(S,N){
    let stk=[];let flag=0;
    for(var i=0;i<S.length;i++){
        if(S[i]=='{' || S[i]=='('
        || S[i]=='['){
           stk.push(S[i])
        }
        else{
            if(stk.length==0){
                flag=1;
                break;
            }
            else{
       if( ( S[i] == ')' && 
       stk[stk.length-1] != '(' ) ||
       (  S[i] == '}' && 
       stk[stk.length-1] != '{' ) || 
       ( S[i] == ']' && 
       stk[stk.length-1] != '[' ) ){

              flag= 1;

              break;
          }
          else{
              stk.pop()
          }
            }
        }
    }
    if(flag==1){
        console.log("No")
    }
    else{
        if(stk.length==0){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
}
//Time Complexity O(N)
//Space Complexity O(N)