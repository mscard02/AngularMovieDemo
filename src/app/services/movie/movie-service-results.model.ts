import { Movie } from "../../models/movie.model";
import { MovieServiceResult } from "./movie-service-result.model";

export interface IMovieServiceResult
{
    results: MovieServiceResult[];
}