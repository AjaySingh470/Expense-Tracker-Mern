const dataParserForItems = (items) => {
    let curr = new Date().getTime();
    let prev = new Date();
    prev.setMonth(prev.getMonth()-1);
    prev = prev.getTime();
    console.log(curr > prev)
    // console.log(typeof prev)

    let newitems = items.filter(item=>
         {
            let itDate = new Date(item.date);
            console.log(itDate.getTime());
            return (itDate.getTime() >= prev && itDate <= curr)

         }
    )
    console.log(newitems)
    items = newitems;
    let parsedData = [];
    let x = 1;
    function getDate(itemDate){
        let dater = new Date(Date.parse(itemDate));
        let txt = dater.toString();
        let date =txt.substring(8,10) + " " + txt.substring(4,7);
        return date;
    }
    let total = 0;
    items.forEach((item) => {
        let curr = {
            sno : x,
            date : getDate(item.date),
            amount : item.amount,
            category : item.category,
        }
        total += curr.amount;
        parsedData.push(curr);
        x += 1;
    })
    
let body = [];
for(let data of parsedData)
{
    let arr = []
    for(let key in data)
    {
        // console.log(key);
        arr.push(data[key]);
    }
    body.push(arr);
}
// console.log(body,total)
    return {body , total};
}
module.exports = dataParserForItems