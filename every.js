let arr=[1,-5,9,6];
/* let flag=true;
function test(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        flag=false;
}
   return flag ;  
    }
    console.log(test(arr));
     */
    let res;
    res=arr.some((value=>{return value>0}));
    console.log(res);