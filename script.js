
let myList = [["milk", 3], ["egg", 4], ["bread", 2], ["detergent", 8], ["butter", 7], ["beverages", 3]];
let newArray = []; //to store removed element from myList Array
newArray.push(myList.shift()); //
newArray.push(myList.pop());
myList.splice(2,1, ["Orange Juice", 17]);


const printItems = () =>{
    myList.map((item)=>{
        const key = item[0];
   
console.log({[key]:item[1]})
    }
    )
}

printItems();