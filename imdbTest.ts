import { Movie } from "./classMovie"
import { Professional } from"./classProfessional"
import { Imdb } from "./imdb"
var fs = require("fs");

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

let miImdb: Imdb = new Imdb ([movie1,movie2,movie3])


// console.log(miImdb.peliculas[0])
// CONVERTIR A JASON EL OBJETO IMDB.
// GUARDAR EL OBJETO EN UN ARCHIVO JSON CON EL NOMBRE "imdbBBDD.json".
// let miJson = JSON.stringify(miImdb)
// fs.writeFileSync('imdbBBDD.json', miJson);


// let objeto = fs.readFileSync('./imdbBBDD.json');


// let miImdb2: Imdb = JSON.parse(objeto)

// console.log(miImdb2.peliculas)


// miImdb.escribirEnFicheroJSON("newIMDB.json")

//////////////////////////////////////////////////////////////////////////////

// let newObjeto = fs.readFileSync('newIMDB.json');
// let miImdb3: Imdb = JSON.parse(newObjeto);

// console.log("Hola");


// console.log(miImdb3.peliculas)


// miImdb.escribirEnFicheroJSON("newIMDB.json")



let miImdb3 : Imdb = new Imdb([])


miImdb3 = miImdb3.obtenerInstanciaIMDB("newIMDB.json")

console.log(miImdb3.peliculas[0].title);

