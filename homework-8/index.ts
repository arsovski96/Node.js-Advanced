interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

const filterByProperty = (
  people: Person[],
  property: string,
  value: string | number
): Person[] => people.filter((person) => person[property] === value);

const peopleArray: Person[] = [
  { name: "Ivan", age: 26, gender: "male" },
  { name: "John", age: 35, gender: "male" },
  { name: "Ana", age: 30, gender: "female" },
];

const malePeople = filterByProperty(peopleArray, "gender", "male");
console.log(malePeople);

const age30 = filterByProperty(peopleArray, "age", 30);
console.log(age30);
