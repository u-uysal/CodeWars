function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((item) => typeof item === "number");
}

console.log(filter_list([1, 2, "a", "b"]));
