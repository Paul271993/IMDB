import {Professional} from "./classProfessional"

let person1 = new Professional("John Soplapo", 69, "Male", 87 , 1.85 , "Blonde", "Blue", "Mongoloid", true, "Australian",  5, "Actor");
let person2 = new Professional("Vladimir Putin", 53, "Male", 90, 1.92, "Bald", "Green", "Caucasian", false, "Russian", 0, "Director");
let person3 = new Professional("Andrea Mostacho", 34, "Female", 61, 1.69, "Black", "Blue", "Caucasian", false, "Italian", 2, "Actor");
let person4 = new Professional("Miguel Lacambra", 30, "Male", 80, 1.70, "Black", "Black", "Caucasian", false, "Spanish", 1, "Actor");
let person5 = new Professional("Angel Demon", 48, "Male", 120, 1.60, "Bald", "Blue", "Black", true, "EEUU", 3 ,"Writer");
let persons = [person1, person2, person3, person4, person5];

console.log(person1.toString());
console.log(person2.toString());
console.log(person3.toString());
console.log(person4.toString());
console.log(person5.toString());

console.log(persons.toString());