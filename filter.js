let A=[10,15,4,8,25];
/* function filterArr(A)
{
    let arr1=[];
    for(let i=0;i<A.length;i++)
    {
        if(A[i]>10)
        arr1.push(A[i]);
    }
    return arr1;
}
console.log(filterArr(A)) */
let arr1=[];
arr1=A.filter((value)=>{return value>10})
console.log(arr1);