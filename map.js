const numbers = [3, 9, 15, 21, 27, 33];

const doubleNumber = numbers.map(number =>

    number * 2
);

console.log(numbers);
console.log(doubleNumber);





const students = [
  { name: "Nina", age: 17 },
  { name: "Michał", age: 16 },
  { name: "Ada", age: 25 },
  { name: "Karol", age: 38 },
  { name: "Hiacynta", age: 14 },
];

const names = students.map(student =>

    student.name
);

console.log(students)
console.log(names);