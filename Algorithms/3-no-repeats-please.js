/* Algorithms: No Repeats Please - Passed
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.*/

function permAlone(str){

  let permutationFunc = (string) => {
    if (!string || typeof string !== "string"){
      return null;
    }

    if (!!string.length && string.length < 2 ){
      return string;
    }

    let permutationsArray = [];
    
    for (let i = 0; i < string.length; i++){
      let char = string[i];
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

      for (let perm of permutationFunc(remainder)){
        let rep = 0;
        for (let j = 0; j < perm.length; j++){
          if((perm[0] === char) || (perm[j] === perm[j+1])){
            rep++;
          }
        }
        if(!rep){
          permutationsArray.push(char + perm) }
        }
    }

    return permutationsArray;
  } 

  let ret =  permutationFunc(str);
  return ret?.length || 0;
  
}

console.log(permAlone('abcdefa'));
