let myArr = [1,2,3,4,5];
function search(item, myArr)
{
    let index = myArr.findIndex(element => element === item);
    if(index === null)
    {
        return -1;
    }
    else{
        return index;
    }
}

console.log(search(1,myArr));