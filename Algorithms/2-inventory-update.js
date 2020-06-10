/* Algorithms: Inventory Update - Passed
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    arr2.forEach((item2) => {
        let curr = arr1.find((item1) => {
            if(item1[1] === item2[1]){
                return item1;
            }
        })

        if(curr){
            let index = arr1.indexOf(curr);
            arr1[index][0] += item2[0]; 
        }
        else{
            let pos = 0;
            arr1.forEach((item1,ind1) => {
                if(item1[1] < item2[1]){
                    pos = ind1 + 1;
                }
            })
            arr1.splice(pos,0,item2);
        }
    })
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
