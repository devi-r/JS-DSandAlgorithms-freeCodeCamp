/* Algorithms: Find the Symmetric Difference - Passed
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates). */


function sym(...args) {
    let i = 1;
    let symm = [...new Set(args[0])];
    while(i <  args.length){
      [...new Set(args[i])].forEach((a1) => {
          if(!symm?.includes(a1)){
            symm.push(a1);
          }
          else{
            let index = symm.indexOf(a1);
            symm.splice(index,1);
          }
      })
      i++;
    }
  
    symm = symm.filter((v, i, a) => a.indexOf(v) === i)
               .sort((a,b) => a - b); 
    return symm;
}
  
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
  