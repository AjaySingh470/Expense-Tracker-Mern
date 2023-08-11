
let total = new Map();
let expenseArr = [];
export const sortCategoryWise = (expdata,categories)=>{
    for(let items in categories)
    {
        total.set(categories[items] , 0);
    }
    for(let items in expdata)
    {
        let tmp = total.get(expdata[items].category);
        total.set(expdata[items].category , tmp + expdata[items].amount)
    }
    let arr = [];
    // eslint-disable-next-line
    for(let [key,value] of total)
    {
        arr.push(value);
    }
    // console.log(arr)
    expenseArr = arr;
    return arr;
}
export const getTotal=()=>
{
    let total = 0;
    // console.log(expenseArr)
    for(const item of expenseArr)
    {
        total += expenseArr[item]
    }
    return total;
}

