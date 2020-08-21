import { Movie } from "./classMovie"
import { Professional } from"./classProfessional"

export class Imdb 
{
    public peliculas: Movie [];

    constructor(peliculas: Movie [])
    {
        this.peliculas = peliculas;
    }


}

