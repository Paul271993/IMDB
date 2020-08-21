import { Movie } from "./classMovie"
import { Professional } from"./classProfessional"
const fs = require("fs");

export class Imdb 
{
    public peliculas: Movie [];

    constructor(peliculas: Movie [])
    {
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero:string)
    {
        
        
        let newJson = JSON.stringify(this.peliculas);

        fs.writeFileSync(nombreFichero, newJson);

    }

    public obtenerInstanciaIMDB(nombreFichero:string)
    {
       let newObjeto = fs.readFileSync(nombreFichero);
       let miImdb3: Imdb = JSON.parse(newObjeto);
    }


}



