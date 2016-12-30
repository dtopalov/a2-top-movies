import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';
import { MovieShortComponent } from '../movies/';

@Component({
    selector: 'top-ten',
    templateUrl: './top-ten.component.html'
})
export class TopTenComponent implements OnInit {
    private topTen: MovieModel[];

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.moviesService.getTopTen()
            .subscribe(resp => this.topTen = resp);
    }
}
