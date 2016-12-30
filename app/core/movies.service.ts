import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MovieModel } from './';

@Injectable()
export class MoviesService {
    movies: MovieModel[] = [];

    constructor(private http: Http) { }

    getMovie(imdbId: string): Observable<MovieModel> {
        return this.http.get('http://www.omdbapi.com/?i=' + imdbId)
            .map((response: Response) => response.json());
    }


    getMovies(count: number) {
        if (this.movies.length === count) {
            return this.movies;
        }

        for (let i = 1; i <= count; i++) {
            this.getMovie(this.padLeft(i, 7))
                .subscribe(response => {
                    this.movies = this.movies.concat([response]);
                    if (i === count) {
                        return this.movies;
                    }
                });
        };
    }

    padLeft(nr: number, n: number, str = '0') {
        return Array(n - String(nr).length + 1).join(str) + nr;
    }
}
