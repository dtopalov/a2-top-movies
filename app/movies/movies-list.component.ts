import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
    private movies: MovieModel[];
    private sortingProperties: string[];
    private pageTitle: string;
    private filterText: string;
    private sortingProperty: string;
    private direction: string;
    private pageSize: number;
    private currentPage: number;
    private numberOfPages: number;

    constructor(
        private moviesService: MoviesService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .map(params => params['page'])
            .subscribe((page) => {
                this.currentPage = page;
            });
        this.pageSize = 10;
        this.currentPage = this.route.snapshot.params['page'];
        this.pageTitle = 'The Movies List';
        this.sortingProperties = ['Title', 'Rating', 'Year'];
        this.sortingProperty = 'Rating';
        this.direction = 'desc';
        this.movies = [];
        for (let i = 1; i <= 100; i++) {
            setTimeout(() => {
                this.leech(this.padLeft(i, 7));
            }, 10);
        }
        this.numberOfPages = 10;
    }

    leech(id: string) {
        this.moviesService.getMovie('tt' + id)
            .subscribe(response => {
                this.movies = this.movies.concat([response]);
                this.numberOfPages = Math.ceil(this.movies.length / this.pageSize);
            });
    }

    padLeft(nr: number, n: number, str = '0') {
        return Array(n - String(nr).length + 1).join(str) + nr;
    }

    onInput(e: any) {
        this.filterText = e.target.value;
        this.numberOfPages = Math.ceil(this.movies.filter(
            m => m.Title.toLocaleLowerCase().indexOf(
                this.filterText.toLocaleLowerCase()) > -1).length / this.pageSize);
    }

    onSortingPropertyChange(e: any) {
        this.sortingProperty = e.target.value;
    }

    onSortingDirectionChange(e: any) {
        this.direction = e.target.value;
    }

    onPageChange(page: number) {
        this.currentPage = this.route.snapshot.params['page'];
    }
}
