let A=[2,4,6,8];
//console.log(A);
let text = "";
A.forEach((value)=>(text+=value+" "));

console.log(text);


//max and min value

let big=Math.max.apply(null,A);
let sml=Math.min.apply(null,A);

console.log(big);
console.log(sml);
 


/* let result="";
for(let i=0;i<A.length;i++)
{

    result +=A[i]+" ";
    
}
console.log(result);
 */