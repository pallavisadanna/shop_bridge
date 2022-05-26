import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies: any;
  movies: any;
  searchValue: any;
  titleSort: boolean = false;
  popularitySort: boolean = false;
  loading: boolean = false;

  constructor(private service: MovieService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.getMovies();
  }
  searchData(event: string) {
    console.log(event);
    if (event == '') {
      this.movies = this.allMovies;
    }
    else {
      this.movies = this.allMovies.filter((a: any) => a.title.toLowerCase().includes(event.toLowerCase()))
      console.log(this.movies)
      if (this.movies.length == 0) {
        alert('Not found');
        this.movies = this.allMovies;
        this.searchValue = '';
      }
    }
  }
  getMovies() {
    this.loading = true
    this.service.getMoviesfromAsset().subscribe(res => {
      this.allMovies = res;
      this.movies = res;
      this.loading = false;
    });
  }
  sortByTitle() {
    this.titleSort = true;
    this.popularitySort = false;
    this.movies.sort((a: any, b: any) => a.title < b.title ? -1 : 1)
  }
  sortByPopularity() {
    this.titleSort = false;
    this.popularitySort = true
    this.movies.sort((a: any, b: any) => a.popularity < b.popularity ? 1 : -1)
  }
  addItem() {
    this.router.navigate(['/home/add-item'])
  }
}
