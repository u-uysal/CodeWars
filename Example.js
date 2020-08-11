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
