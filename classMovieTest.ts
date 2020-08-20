import { Movie } from "./classMovie"
import { Professional } from"./classProfessional"

let person1 = new Professional("John Soplapo", 69, "Male", 87 , 1.85 , "Blonde", "Blue", "Mongoloid", true, "Australian",  5, "Actor");
let person2 = new Professional("Vladimir Putin", 53, "Male", 90, 1.92, "Bald", "Green", "Caucasian", false, "Russian", 0, "Director");
let person3 = new Professional("Andrea Mostacho", 34, "Female", 61, 1.69, "Black", "Blue", "Caucasian", false, "Italian", 2, "Actor");
let person4 = new Professional("Miguel Lacambra", 30, "Male", 80, 1.70, "Black", "Black", "Caucasian", false, "Spanish", 1, "Actor");
let person5 = new Professional("Angel Demon", 48, "Male", 120, 1.60, "Bald", "Blue", "Black", true, "EEUU", 3 ,"Writer");


let movie1 = new Movie("Ovejas asesinas", 2002, "Spain", "Terror");

movie1.actors = [person1, person3, person4];
movie1.director = "Andres Cabreado";
movie1.writer = "Armando Armado";
movie1.language = "Spanish";
movie1.plataform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Martin Cabrales";
movie1.producer = "Jordi ENP";
movie1.distributor = "Mis Cojo...";


let movie2 = new Movie("Niggas in da house", 2012, "EEUU", "Comedy");

movie2.actors = [person1, person3, person4];
movie2.director = "Hitler";
movie2.writer = "Franco";
movie2.language = "English";
movie2.plataform = "Prime-video";
movie2.isMCU = false;
movie2.mainCharacterName = "Erik Dick Head";
movie2.producer = "Eminem";
movie2.distributor = "KAMEHAMEHA"


let movie3 = new Movie("El despierto no está dormido", 1995, "Spain", "Drama");

movie3.actors = [person1, person3, person4];
movie3.director = "Vlad Tepes";
movie3.writer = "Belen Esteban";
movie3.language = "Spanish";
movie3.plataform = "X-Video";
movie3.isMCU = true;
movie3.mainCharacterName = "Jordi ENP";
movie3.producer = "La Duquesa de Alba";
movie3.distributor = "Foro Coches"


console.log(movie3.toString());