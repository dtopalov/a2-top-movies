import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MovieModel } from './';

@Injectable()
export class MoviesService {
    constructor(private http: Http) { }

    getMovie(imdbId: string): Observable<MovieModel> {
        return this.http.get('http://www.omdbapi.com/?i=' + imdbId)
            .map((response: Response) => response.json());
    }

    getTopTen() {
        return this.http.get('../data/movies.json')
            .map(resp => resp.json());
    }
}
