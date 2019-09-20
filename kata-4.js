//determine which instructor has the longest name

const instructorWithLongestName = function(instructors) {
  let longestNameLength = instructors[0].name.length;
  let longestNameObject = instructors[0];
  
  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > longestNameLength) {
      longestNameLength = instructors[i].name.length;
      longestNameObject = instructors[i];
    }
  }
  return longestNameObject;
};

const instructorWithLongestName2 = function(instructors) {
  let longestNameLength = instructors[0].name.length;
  let longestNameObject = instructors[0];

  for (const obj of instructors) {
    if (obj.name.length > longestNameLength) {
      longestNameLength = obj.name.length;
      longestNameObject = obj;
    }
  }
  return longestNameObject;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

console.log(instructorWithLongestName2([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName2([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));