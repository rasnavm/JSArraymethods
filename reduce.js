let arr=[10,30,5,15];
/* let s=0;
function sum(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        s=s+arr[i];
        
    }
    return s;
}
console.log(sum(arr));
 */
let s;
s=arr.reduce((total,value)=>{return total+value});
console.log(s);