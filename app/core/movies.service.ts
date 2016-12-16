import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MoviesService {
    constructor(private http: Http) { }

    getMovies() {
        return this.http.get('../data/movies.json')
            .map((response: Response) => response.json());
    }
}
