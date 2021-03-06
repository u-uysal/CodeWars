function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((item) => typeof item === "number");
}

console.log(filter_list([1, 2, "a", "b"]));

function DNAStrand(dna) {
  //your code here
  let splitArray = dna.split("");
  console.log(splitArray);

  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return splitArray.map((x) => pairs[x]).join("");
}

function XO(str) {
  let countX = 0;
  let countO = 0;
  let splitArray = str.toLowerCase().split("");

  if (splitArray.indexOf("x") === -1 || splitArray.indexOf("o") === -1)
    return false;
  if (splitArray.indexOf("x") !== -1 && splitArray.indexOf("o") !== -1) {
    for (let i = 0; i < splitArray.length; i++) {
      console.log(splitArray[i]);

      if (splitArray[i] === "x") {
        countX++;
      } else if (splitArray[i] === "o") {
        countO++;
      }
    }
  }
  return countX === countO;

  //code here
}

function removeChar(str) {
  let newar = str.split("");
  newar.shift();
  newar.pop();
  return newar.join("");
  //You got this!
}

function sortArray(array) {
  let newAr = array.filter((item) => item % 2 === 1);
  let indexArray = newAr.map((item) => array.indexOf(item));

  let sortedArray = newAr.sort((a, b) => a - b);

  for (let i = 0; i < indexArray.length; i++) {
    array[indexArray[i]] = sortedArray[i];
  }

  // Return a sorted array.
  return array;
}
