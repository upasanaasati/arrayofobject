let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
]

// ['JOHN', 'BABA', 'YAGA', 'WICK']"
studentRecords.map((ele) => {
  console.log(ele.name.toUpperCase());
});


studentRecords.map((ele) => {
  if (ele.marks > 50) {
    console.log(ele);
  }
  // console.log(ele.name.toUpperCase());
});
// second method
let res = studentRecords.filter((el) => {
  return el.marks > 50;
});
console.log(res);

// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sum = studentRecords.reduce((pre_value, cur_value) => {
  return (pre_value += cur_value.marks);
}, 0);
console.log(sum);

sum = 0;

let res1 = studentRecords.filter((item) => {
  return item.marks > 50 && item.id > 120;
});
console.log(res1);
studentRecords.map((item) => {
  if (item.marks > 50) {
    console.log(item.name);
  }
});
// This time we are required to print the sum of marks of the students with id > 120.

var sum1 = 0;
for (var i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120) {
    sum1 += studentRecords[i].marks;
  }
}
console.log(sum1);
// This time we are required to print the total marks of the students with marks greater than 50 after
// a grace of 15 marks has been added to those students who scored less than 50.
var sum2 = 0;
for (var i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    sum2 += studentRecords[i].marks;
  } else {
    sum2 += studentRecords[i].marks + 15;
  }
}
console.log(sum2);
