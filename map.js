let arr1=[1,2,3,4];
let arr2=[];
 /* for(let i=0;i<arr1.length;i++)
{
    arr2.push((arr1[i]*2));
} 
console.log(arr2); */
// using map()
arr2=arr1.map((value)=>{return value*2})
console.log(arr2);